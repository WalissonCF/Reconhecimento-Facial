import mysql.connector
import base64
from app import app
import cv2
import numpy

cnx = mysql.connector.connect(
    database=app.config['DATABASE'],
    user= app.config['USERDB'], 
    password= app.config['PASSWORDDB'], 
    host= app.config['HOST']
)

consult = cnx.cursor()

def image_resize(image, width = None, height = None, inter = cv2.INTER_AREA):
    # initialize the dimensions of the image to be resized and
    # grab the image size
    dim = None
    (h, w) = image.shape[:2]

    # if both the width and height are None, then return the
    # original image
    if width is None and height is None:
        return image

    # check to see if the width is None
    if width is None:
        # calculate the ratio of the height and construct the
        # dimensions
        r = height / float(h)
        dim = (int(w * r), height)

    # otherwise, the height is None
    else:
        # calculate the ratio of the width and construct the
        # dimensions
        r = width / float(w)
        dim = (width, int(h * r))

    # resize the image
    resized = cv2.resize(image, dim, interpolation = inter)

    # return the resized image
    return resized


def register_face(image_file):
    image_converted = adjust_base64(image_file['image'])

    # buf_decode = base64.b64decode(buf)

    # buf_arr = np.fromstring(buf_decode, dtype=np.uint8)

    # return cv2.imdecode(buf_arr, cv2.IMREAD_UNCHANGED)


    img = cv2.imdecode(numpy.fromstring(base64.b64decode(image_converted), numpy.uint8), cv2.IMREAD_UNCHANGED)

    img_resized = image_resize(img, height=500)

    image_converted = cv2.imencode('.jpg', img)[1].tostring()

    image_converted = base64.b64encode(image_converted)

    # cv2.imwrite('/tmp/img_orig.jpg', img) 

    # cv2.imwrite('/tmp/img_resized.jpg', image_converted) 

    image_converted_b64 = image_converted.decode('utf-8')

    insertImage(image_converted_b64,image_file['username'])



def insertImage(base64image,username):
    query = "INSERT INTO IMAGES (IMAGE_USER,USERNAME) values(%s, %s)"
    try:
        consult.execute(
            query,
            (
                base64image,
                username,
            )
        )
        cnx.commit()
    except Exception as identifier:
        print(identifier)


def adjust_base64(base64):
    return base64.replace('data:image/png;base64,',"")
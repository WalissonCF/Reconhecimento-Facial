import mysql.connector
import base64
from app import app
import cv2
import numpy

cnx = mysql.connector.connect(
    database=app.config['DATABASE'],
    user=app.config['USERDB'],
    password=app.config['PASSWORDDB'],
    host=app.config['HOST']
)

consult = cnx.cursor()


def register_face(image_file):
    image_converted = adjust_base64(image_file['image'])

    img = cv2.imdecode(numpy.fromstring(base64.b64decode(
        image_converted), numpy.uint8), cv2.IMREAD_UNCHANGED)

    image_converted = cv2.imencode('.jpg', img)[1].tostring()

    image_converted = base64.b64encode(image_converted)

    image_converted_b64 = image_converted.decode('utf-8')

    insertImage(image_converted_b64, image_file['username'])


def insertImage(base64image, username):
    query = "INSERT INTO IMAGES (IMAGE_USER,USERNAME) values(%s, %s)"
    consult.execute(
        query,
        (
            base64image,
            username,
        )
    )
    cnx.commit()


def adjust_base64(base64):
    return base64.replace('data:image/png;base64,', "")

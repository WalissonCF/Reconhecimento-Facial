import mysql.connector
import base64

cnx = mysql.connector.connect(user="root", database="recognition_system")
consult = cnx.cursor()

def register_face(image_file):
    image_converted = convertToBase64(image_file)
    insertImage(image_converted)



def insertImage(base64image):
    query = "INSERT INTO IMAGES (IMAGE) values(%s)"
    try:
        consult.execute(query,(base64image,))
    except Exception as identifier:
        print(identifier)

def convertToBase64():
    with open('fabio.jpeg', 'rb') as image:
        base64image = base64.b64encode(image.read())
        return base64image
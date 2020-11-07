import mysql.connector
import base64
from app import app

cnx = mysql.connector.connect(
    database=app.config['DATABASE'],
    user= app.config['USERDB'], 
    password= app.config['PASSWORDDB'], 
    host= app.config['HOST']
)

consult = cnx.cursor()

def register_face(image_file):
    image_converted = adjust_base64(image_file['image'])
    insertImage(image_converted,image_file['username'])



def insertImage(base64image,username):
    query = "INSERT INTO IMAGES (IMAGE,USERNAME) values(%s, %s)"
    try:
        consult.execute(
            query,
            (
                base64image,
                username,
            )
        )
    except Exception as identifier:
        print(identifier)


def adjust_base64(base64):
    return base64.replace('data:image/png;base64,',"")
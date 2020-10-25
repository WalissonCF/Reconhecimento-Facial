import mysql.connector
from app.models.passwordEncoder import encoder
from app.exceptions.loginException import UserNotFound

cnx = mysql.connector.connect(user="root", database="recognition_system")
consult = cnx.cursor()


def valid_user(credential):
    credentials = search_username(credential.get('username'))
    if credentials:
        if credentials[1] == encoder(credential.get('password')):
            return  {"authenticated":True}
        else:
            return  {"authenticated":False}
    else:
        return {"authenticated":False}


def search_username(user):
    query = """SELECT username,password,email FROM USERS 
                WHERE USERNAME = %s"""

    try:
        consult.execute(
            query,
            (
                user,
            )
        )

        return consult.fetchone()
    except Exception as ex:
        print(ex)
        return None

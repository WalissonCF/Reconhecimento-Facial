import mysql.connector
from app.exceptions.loginException import UserNotFound

cnx = mysql.connector.connect(user="root", database="recognition_system")
consult = cnx.cursor()


def valid_user(username, password):
    credentials = search_username(username)
    if credentials:
        if credentials[1] == password:
            return "entrou"
        else:
            return "Acesso negado"
    else:
        return "Acesso negado"


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

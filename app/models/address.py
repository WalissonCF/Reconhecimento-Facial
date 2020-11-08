from app import app
import mysql.connector

cnx = mysql.connector.connect(
    host=app.config['HOST'],
    user=app.config['USERDB'],
    database=app.config['DATABASE'],
    password=app.config['PASSWORDDB']
)

consult = cnx.cursor()


def register_address(address_user):
    query = """INSERT INTO ADDRESS (ID_USER,STREET,RESIDENCE_NUMBER,NEIGHBORHOOD,CITY,STATE)
                VALUES(%s,%s, %s, %s, %s, %s)"""
    id_register_user = search_user(address_user.get('username'))

    consult.execute(
        query,
        (
            id_register_user[0],
            address_user.get('street'),
            address_user.get('number'),
            address_user.get('neighborhood'),
            address_user.get('city'),
            address_user.get('state')
        )
    )
    cnx.commit()


def search_user(username):

    query = """SELECT id FROM USERS 
        WHERE username = %s"""

    try:
        consult.execute(
            query,
            (
                username,
            )
        )
        result_query = consult.fetchone()
    except Exception as ex:
        print(ex)

    return result_query

import mysql.connector

cnx = mysql.connector.connect(user="root", database="recognition_system")
consult = cnx.cursor()


def register_address(address_user):
    query = """INSERT INTO ADDRESS (ID_USER,STREET,RESIDENCE_NUMBER,NEIGHBORHOOD,CITY,STATE)
                VALUES(%s,%s, %s, %s, %s, %s)"""
    id_register_user = search_user(address_user.get('username'))
    try:
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
    except Exception as ex:
        cnx.rollback()
        print(ex)
        return "Error"


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
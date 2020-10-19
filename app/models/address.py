import mysql.connector

cnx = mysql.connector.connect(user="root", database="recognition_system")
consult = cnx.cursor()


def register_address(address_user):
    query = """INSERT INTO ADDRESS (STREET,RESIDENCE_NUMBER,NEIGHBORHOOD,CITY,STATE)
                VALUES(%s, %s, %s, %s, %s)"""

    try:
        consult.execute(
            query,
            (
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

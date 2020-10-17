import mysql.connector

cnx = mysql.connector.connect(user="root",database="recognition_system")
consult = cnx.cursor()

def register_address(address_user):
    query = "INSERT INTO ADDRESS (STREET,RESIDENCE_NUMBER,NEIGHBORHOOD,CITY,STATE) VALUES(%s, %s, %s, %s, %s)"

    try:
        consult.execute(query,(address_user.get('rua'),address_user.get('numeroResidencia'), address_user.get('bairro'), address_user.get('cidade'),address_user.get('estado')))
        cnx.commit()       
    except Exception as ex:
        print()
        return "Error"
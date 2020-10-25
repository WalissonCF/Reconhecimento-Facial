from app.exceptions.registerException import RegisteredUser
from app.models.passwordEncoder import encoder
from app.models import address
import mysql.connector
import json

cnx = mysql.connector.connect(user="root", database="recognition_system")
consult = cnx.cursor()


def register(new_user):
    try:
        valid_username(new_user.get('username'))
        valid_email(new_user.get('email'))
        register_user(new_user)
        cnx.commit()
        return {"register":True}
    except (RegisteredUser, Exception) as e:
        print(e)
        cnx.rollback()
        return {"register":False}


def valid_username(username):

    query = """SELECT USERNAME FROM USERS 
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

    if result_query != None:
        raise RegisteredUser('Usuario já cadastrado')


def valid_email(email):
    query = """SELECT USERNAME FROM USERS 
                WHERE email = %s"""

    try:
        consult.execute(
            query,
            (
                email,
            )
        )
        result_query = consult.fetchone()
    except Exception as ex:
        print(ex)

    if result_query != None:
        raise RegisteredUser('Email já registrado, informe outro email!')


def register_user(new_user):
    query = """INSERT INTO USERS (FISTNAME,LASTNAME,EMAIL,USERNAME,PASSWORD) 
                VALUES(%s, %s, %s, %s, %s)"""
    try:
        consult.execute(
            query,
            (
                new_user.get('fistname'),
                new_user.get('lastname'),
                new_user.get('email'),
                new_user.get('username'),
                encoder(new_user.get('password'))
            )
        )
        address.register_address(new_user)
    except Exception as ex:
        print(ex)
        cnx.rollback()
        raise Exception('Erro ao cadastrar')

from flask import render_template, request, redirect, url_for
from app import app
from app.models import register as rg
from app.models import login as lg
from app.models import address 
from json import dumps,dump
import os

@app.route("/index")
@app.route("/")
def index():
    return render_template('index.html')


@app.route("/login")
def login():
    return render_template('login.html')

@app.route("/validCredentials", methods=['POST'])
def valid_credentials():
    user = request.form.get('username')
    password = request.form.get('password')
    resul = lg.valid_user(user,password)
    if resul == "Acesso negado":
        return resul
    else:
        return resul


@app.route("/register")
def register():
    return render_template('register.html')


@app.route("/registerUser", methods=['POST'])
def register_user():
    return rg.register(request.form)



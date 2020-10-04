from flask import render_template, request, redirect
from app import app
from json import dumps
import os

@app.route("/index")
@app.route("/")
def index():
    return render_template('index.html')


@app.route("/login")
def login():
    return render_template('login.html')


@app.route("/validation", methods=['POST'])
def validation():

    user = dumps(request.form['user'])
    print(user)

    password = dumps(request.form['password'])
    print(password)

    return "ok"
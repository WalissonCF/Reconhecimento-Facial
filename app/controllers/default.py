from flask import render_template, request, redirect, url_for
from app import app
from app.models import register as rg
from app.models import address 
from json import dumps
import os

@app.route("/index")
@app.route("/")
def index():
    return render_template('index.html')


@app.route("/login")
def login():
    return render_template('login.html')


@app.route("/register")
def register():
    return render_template('register.html')


@app.route("/registerUser", methods=['POST'])
def register_user():
    if rg.register(request.form) == "Register User":
        redirect(url_for('index'), code=307)
        return "ok"
    else:
        return  "error"


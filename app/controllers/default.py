from flask import render_template, request, redirect, url_for
from app import app
from app.models import register as rg
from json import dumps,dump

@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html')


@app.route("/login")
def login():
    return render_template('login.html')

@app.route("/home")
def logado():
    return render_template('logado.html')
    

@app.route("/register")
def register():
    return render_template('register.html')


@app.route("/registerUser", methods=['POST'])
def register_user():
    return rg.register(request.form)

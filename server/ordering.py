from requests import Session
import json
from flask import request

def login(session):
    url = "https://www.instacart.ca/v3/dynamic_data/authenticate/login?source=web^&cache_key=undefined"

    email = request.form['email']
    password = request.form['password']
    with open('credentials.json', 'r') as f:
        creds = json.loads(f.read())
        authenticity_token = creds['authenticity_token']

    payload = json.dumps({
        'scope': '\\',
        'grant_type': 'password',
        'signup_v3_endpoints_web': 'null',
        'email': email,
        'password': password,
        'authenticity_token': authenticity_token
    })
    
    headers = {
        'authority': 'www.instacart.ca',
        'origin': 'https://www.instacart.ca',
        'x-csrf-token': 'undefined',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36',
        'content-type': 'application/json',
        'accept': 'application/json',
        'x-client-identifier': 'web',
        'x-requested-with': 'XMLHttpRequest',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'referer': 'https://www.instacart.ca/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9'
    }

    response = session.request("POST", url, headers=headers, data = payload)

    return(response.text.encode('utf8'))

def get_ingredients():
    pass

def add_to_cart(ingredients):
    pass

def order():
    session = Session()
    return login(session)

if __name__ == "__main__":
    s = Session()
    print(login(s))
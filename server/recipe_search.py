import requests
from flask import request

def get_recipes():

    apiKey = "07712accff1746d6a80e64c71cf4a73e"
    query = "Pasta"

    url = "https://api.spoonacular.com/recipes/search?apiKey={}&query={}&instructionsRequired=true".format(apiKey,query)

    

    payload = {}
    headers= {}

    response = requests.request("GET", url, headers=headers, data = payload)

    return response.text.encode('utf8')
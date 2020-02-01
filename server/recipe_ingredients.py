import requests
from flask import request
import json

#IN: id of a recipe from recipe_search
#OUT: list of ingredients in that recipe
def get_recipe_ingredients():

    with open('credentials.json', 'r') as f:
        creds = json.loads(f.read())
        apiKey = creds['spoonacular_api_key']

    recipeId = request.form['id']

    url = "https://api.spoonacular.com/recipes/{}/information?apiKey={}".format(recipeId, apiKey)

    payload = {}
    headers= {}
    response = requests.request("GET", url, headers=headers, data = payload)

    return response.text.encode('utf8')
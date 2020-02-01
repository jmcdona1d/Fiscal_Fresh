import requests
from flask import request
import json

#In: payload with any combination of: query(name), cuisine, diet, intolerences
#Out: list of recipies that match the parameters 
#       list format: id, title, readyInMinutes, servings, image/imageURL
def get_recipes():

    with open('credentials.json', 'r') as f:
        creds = json.loads(f.read())
        apiKey = creds['spoonacular_api_key']

    query = request.form.get('query', '')
    cuisine = request.form.get('cuisine', '')
    diet = request.form.get('diet', '')
    intolerences = request.form.get('intolerences', '')

    url = "https://api.spoonacular.com/recipes/search?apiKey={}&query={}&cuisine={}&diet={}&intolerences={}&instructionsRequired=true".format(apiKey,query,cuisine,diet,intolerences)
    payload = {}
    headers= {}

    response = requests.request("GET", url, headers=headers, data = payload)

    return response.text.encode('utf8')
import requests
from flask import request

#In: payload with any combination of: query(name), cuisine, diet, intolerences
#Out: list of recipies that match the parameters
def get_recipes():

    apiKey = "07712accff1746d6a80e64c71cf4a73e"

    query = request.form.get('query', '')
    cuisine = request.form.get('cuisine', '')
    diet = request.form.get('diet', '')
    intolerences = request.form.get('intolerences', '')

    url = "https://api.spoonacular.com/recipes/search?apiKey={}&query={}&cuisine={}&diet={}&intolerences={}&instructionsRequired=true".format(apiKey,query,cuisine,diet,intolerences)

    payload = {}
    headers= {}

    response = requests.request("GET", url, headers=headers, data = payload)

    return response.text.encode('utf8')
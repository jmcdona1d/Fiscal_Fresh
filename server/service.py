from flask import Flask, request
from ordering import order
from recipe_search import get_recipes
from recipe_ingredients import get_recipe_ingredients
import database
app = Flask(__name__)

@app.route('/search-recipes', methods=['GET'])
def search_recipes():
    return get_recipes()

@app.route('/get-recipe-details', methods=['GET'])
def get_recipe_details():
    return get_recipe_ingredients()

@app.route('/order')
def order_ingredients():
    # call code to order ingredients passed with the request
    return order()

@app.route('/authenticate')
def sign_in():
    # authenticate, return jwc token
    return "a"

@app.route('/recipe_history', methods=['GET'])
def get_recipe_history():
    # get recipe history for authenticated user
    return database.add_history()


@app.route('/')
def hello():
    return "hello"


if __name__ == "__main__":
    app.run(debug=True)
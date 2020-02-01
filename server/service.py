from flask import Flask
from ordering import order
app = Flask(__name__)

@app.route('/search-recipes')
def search_recipes():
    # call James' code here
    return "a"

@app.route('/get-recipe-details')
def get_recipe_details():
    # call James' code here
    return "a"

@app.route('/order')
def order_ingredients():
    # call code to order ingredients passed with the request
    return order()

@app.route('/authenticate')
def sign_in():
    # authenticate, return jwc token
    return "a"

@app.route('/recipe_history')
def get_recipe_history():
    # get recipe history for authenticated user
    return "a"


@app.route('/')
def hello():
    return "hello"


if __name__ == "__main__":
    app.run(debug=True)
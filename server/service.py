from flask import Flask
app = Flask(__name__)

@app.route('/get_recipes')
def get_recipes():
    # call James' code here
    return "a"

@app.route('/order')
def order():
    # call Michael's code here
    return "a"

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
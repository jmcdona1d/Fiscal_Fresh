from pymongo import MongoClient
from flask import request
import json
import copy

with open('credentials.json', 'r') as f:
    creds = json.loads(f.read())
    dbKey = creds['database_key']

dbconnection = "mongodb+srv://qhacks-db:{}@recipiestorage-bqfba.mongodb.net/test?retryWrites=true&w=majority".format(dbKey)
client = MongoClient(dbconnection)

db = client.get_database('recipe_history')
records = db.history
print('Connected to database successfully')
# class database(object):
        

# IN: email in payload
# OUT: list of recipies associated with that user
def get_history():

    email = request.form['email']
    if (records.count_documents({'email':email}) != 1):
        return {
            'err':"email not found"
        }

    entry = records.find_one({'email': email})
    return (entry['recipes'])

#IN: email, array of recipes
#OUT: error or success status code??
def add_history():
    request_body = copy.deepcopy(request.get_json())
    if not request_body:
        request_body = request.form

    email = request_body['email']
    additions = request_body['recipes']
    #add document
    if (records.count_documents({'email':email}) != 1):
        new_entry={
            'email':email,
            'recipes':additions
        }
        records.insert_one(new_entry)

    #edit document that already exists
    else:
        entry = records.find_one({'email':email})
        recipes = entry['recipes'] + additions
        
        records.update_one({'email':email}, {"$set":{'recipes': recipes}})
    return {
        'result': "success"
    }

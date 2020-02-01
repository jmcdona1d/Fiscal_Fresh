from pymongo import MongoClient
import json

records = None

def init_db():
    with open('credentials.json', 'r') as f:
            creds = json.loads(f.read())
            dbKey = creds['database_key']

    dbconnection = "mongodb+srv://qhacks-db:{}@recipiestorage-bqfba.mongodb.net/test?retryWrites=true&w=majority".format(dbKey)
    client = MongoClient(dbconnection)

    db = client.get_database('recipe_history')
    records = db.history
    print('Connected to database successfully')

# def get_recipe_history():
#     new_user = {
#         'email' : 'mike@qhacks.com',
#         'recipes' :'23424,35342,8294983'
#     }

#     # records.insert_one(new_user)
#     print(records.count({'email':'mike@hacks.com'})) #check if email exists
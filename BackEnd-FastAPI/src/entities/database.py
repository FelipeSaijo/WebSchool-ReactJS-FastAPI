import psycopg2

class DataBase():
    def __init__(self, user, password, db_name, host, port):
        self._user = user
        self._password = password
        self._db_name = db_name
        self._host = host
        self._port = port
        
    def open_connection(self):
        self._conn = psycopg2.connect(user=self._user, password=self._password, dbname=self._db_name, host=self._host, port=self._port)
        return self._conn 

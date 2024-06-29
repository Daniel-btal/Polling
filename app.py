from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)


def get_db_connection():
        return mysql.connector.connect(
            host="localhost",
            user="root",
            password="",
            database="polling"
        )


@app.route('/api/poll', methods=['GET'])
def get_poll():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute('SELECT * FROM poll')
    poll = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(poll)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    connection = get_db_connection()
    cursor = connection.cursor()
    
    cursor.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
    connection.commit()
    
    cursor.close()
    connection.close()
    
    return jsonify({"message": "Registration successful"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    
    cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
    user = cursor.fetchone()
    
    cursor.close()
    connection.close()
    
    if user:
        return jsonify({"message": "Login successful","user":user})
    else:
        return jsonify({"message": "Invalid username or password"}), 401

@app.route('/api/vote', methods=['POST'])
def vote():
    data = request.get_json()
    candidate_id = data['candidateId']
    
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute('UPDATE poll SET votes = votes + 1 WHERE id = %s', (candidate_id,))
    connection.commit()
    cursor.close()
    connection.close()
    return jsonify({'message': 'Vote counted successfully'})

@app.route('/api/results', methods=['GET'])
def get_results():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute('SELECT * FROM poll')
    results = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(results)


if __name__ == '__main__':
    app.run(debug=True)

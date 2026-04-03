from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

# API endpoint for the 3 gallery photos
@app.route('/api/gallery')
def gallery_api():
    photos = [
        {"id": 1, "url": "/static/images/1.jpg", "caption": "You looking like an absolute snack 🍟"},
        {"id": 2, "url": "/static/images/2.jpg", "caption": "That smile that gets me out of trouble 😇"},
        {"id": 3, "url": "/static/images/3.jpg", "caption": "Us pretending to be a normal couple 🤪"}
    ]
    return jsonify(photos)

# API endpoint for appreciation notes
@app.route('/api/notes')
def notes():
    appreciation_notes = [
        {"id": 1, "text": "Thank you for not blocking my number after our first date. Best decision ever! 😂"},
        {"id": 2, "text": "You are the 'she is everything, he is just Ken' dynamic in real life. Keep slaying. 💅"},
        {"id": 3, "text": "I love you more than sleep. And you know how much I love sleep! 😴❤️"}
    ]
    return jsonify(appreciation_notes)

if __name__ == '__main__':
    print("Welcome to ForeverWithYou! 🚀")
    # Using 5001 to prevent AirPlay conflicts
    app.run(host='0.0.0.0', debug=True, port=5001)

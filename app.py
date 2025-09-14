from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/add', methods=['POST'])
def add_numbers():
    data = request.get_json(force=True)
    try:
        a = data.get('a')
        b = data.get('b')
        c = data.get('c', 0)
        # Validate inputs
        a = float(a)
        b = float(b)
        c = float(c)
    except Exception:
        return jsonify({'error': 'Invalid input. Provide numeric values for a and b.'}), 400

    result = a + b + c
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)

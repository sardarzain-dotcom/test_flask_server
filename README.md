# test_flask_server

This is my first edit
This my second edit
THis is my fourth edit
This is my fifith edit

Simple Flask app with a small frontend that adds two numbers.

Run (PowerShell):

```powershell
python -m venv venv; .\venv\Scripts\Activate.ps1; pip install -r requirements.txt; python app.py
```

Open http://127.0.0.1:5000 in your browser.

Docker
------

Build the Docker image (from the project root):

```powershell
docker build -t your-username/test-flask-server:latest .
```

Run the container locally:

```powershell
docker run -p 5000:5000 your-username/test-flask-server:latest
```

Push to Docker Hub (replace with your registry of choice):

```powershell
docker tag your-username/test-flask-server:latest your-username/test-flask-server:v1
docker push your-username/test-flask-server:v1
```

Cloud deployment notes:
- For services like AWS ECS, Azure App Service, or Google Cloud Run, push the image to a registry (Docker Hub, ECR, ACR, or Artifact Registry) and follow the platform's steps to deploy a container.
- Cloud Run or App Service can directly use the image and expose port 5000.
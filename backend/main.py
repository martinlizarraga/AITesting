from fastapi import FastAPI, UploadFile, File, BackgroundTasks
from worker import process_audio_task
import uuid
import os
import shutil

app = FastAPI()

UPLOAD_FOLDER = "uploads/"
OUTPUT_FOLDER = "output/"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

@app.post("/upload")        
async def process_audio(
    background_tasks: BackgroundTasks,
    file: UploadFile = File(...),
    instrument: str = "guitar"
):
    """Upload an audio file and process it asynchronously"""
    file_id = str(uuid.uuid4()) #Generate a unique ID for the file
    file_path = f"{UPLOAD_FOLDER}{file_id}.mp3"

    #Save file to upload folder
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    #Add background task to process audio
    background_tasks.add_task(process_audio_task, file_path, instrument)

    return {"message": "Processing started", "file_id": file_id}

@app.get("/download/{file_id}")
async def download_audio(file_id: str):
    """Download the processed audio file"""
    processed_file = f"{OUTPUT_FOLDER}{file_id}_processed.mp3"

    if os.path.exists(processed_file):
        return {"download_url": f"/static/{file_id}_processed.mp3"}
    
    return {"error": "File not found. Processing may still be in progress."}
        
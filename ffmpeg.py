from flask import Flask, request, send_file
import ffmpeg
import os

# Create directories if they don't exist
if not os.path.exists('uploads'):
    os.makedirs('uploads')

if not os.path.exists('outputs'):
    os.makedirs('outputs')

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload():
    try:
        if 'mp3' not in request.files or 'image' not in request.files:
            return 'No file part', 400

        mp3_file = request.files['mp3']
        image_file = request.files['image']
        mp3_path = os.path.join('uploads', mp3_file.filename)
        image_path = os.path.join('uploads', image_file.filename)
        output_path = os.path.join('outputs', 'output.mp4')

        # Save files to disk
        mp3_file.save(mp3_path)
        image_file.save(image_path)

        # Process files with FFmpeg
        (
            ffmpeg
            .input(image_path, loop=1, framerate=2)
            .input(mp3_path)
            .output(output_path, vcodec='libx264', crf=18, pix_fmt='yuv420p', vf='scale=1280:720', shortest=None)
            .run()
        )

        return send_file(output_path, as_attachment=True)
    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(debug=True)

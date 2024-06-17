document.getElementById('startConversion').addEventListener('click', function() {
    // Your conversion logic here
    console.log('Starting conversion process...');
});

document.getElementById('startConversion').addEventListener('click', function() {
    // Your conversion logic here
    var notification = document.getElementById('notification');
    notification.textContent = 'Starting conversion process...';
    notification.style.display = 'block';
});

document.getElementById('startConversion').addEventListener('click', function() {
    var mp3File = document.getElementById('mp3Upload').files[0];
    var coverArtFile = document.getElementById('coverArtUpload').files[0];
    var notification = document.getElementById('notification');

    if(mp3File && coverArtFile) {
        // Both files are uploaded, proceed with conversion
        notification.textContent = 'Starting conversion process...';
        notification.style.display = 'block';
        // Your conversion logic here
    } else {
        // One or both files are missing, notify the user
        notification.textContent = 'Please upload both an MP3 file and a cover art image to start the conversion.';
        notification.style.display = 'block';
    }
});

document.getElementById('mp3Upload').addEventListener('change', function(event) {
    var file = event.target.files[0];
    if(file) {
        // Perform the upload
        console.log('File selected:', file.name);
        // You can add your upload logic here
    }
});

document.getElementById('coverArtUpload').addEventListener('change', function(event) {
    var file = event.target.files[0];
    if(file) {
        // Perform the upload
        console.log('File selected:', file.name);
        // You can add your upload logic here
    }
});
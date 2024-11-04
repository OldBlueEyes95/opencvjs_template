function onOpenCvReady() {
    document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
    
    let imgElement = document.getElementById('imageSrc');
    let inputElement = document.getElementById('fileInput');
    
    inputElement.addEventListener('change', (e) => {
        imgElement.src = URL.createObjectURL(e.target.files[0]);
    }, false);
    
    imgElement.onload = function() {
        /* Your code starts here */
        
        // read an image
        let image = cv.imread(imgElement.src) // can read an image from imageSource
        
        // create a new variable to save the image
        // new cv.Mat(); creates an empty opencv image
        let imageMat = new cv.Mat();
        
        
        // adding shape
        let point1 = new cv.Point(10, 10);
        let point2 = new cv.Point(100, 100);
        let color = new cv.Scalar(128, 0, 0, 255);
        cv.rectangle(image, point1, point2, color, 2);
        
        
        // show the image
        // cv.imshow (canvasSource, imageMat) can show imageMat on the canvasSource
        // cv.imshow(imgElement, image);
        
        // empty the memory
        // yourMat.delete() method can be used
        // imageMat.delete();
        
        /* Your code ends here */
    };
}
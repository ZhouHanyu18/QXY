function condition1(canvas, x, y) {
    var pixel = canvas.getImageData(x, y, 1, 1);
    return pixel.data[3] <= 255;
}
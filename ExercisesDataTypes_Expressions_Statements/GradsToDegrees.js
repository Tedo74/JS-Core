function gradsToDegrees(grads) {
    let degrees = grads / 40 * 36;

    degrees = degrees % 360;
    if (degrees < 0) {
        degrees = 360 - Math.abs(degrees);
    }
    console.log(degrees);
}
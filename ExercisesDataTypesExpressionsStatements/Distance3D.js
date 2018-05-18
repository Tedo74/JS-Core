function dist3D(arr) {
    let [x1, y1, z1, x2, y2, z2] = arr;
    let dist2D = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));
    let dist3D = Math.sqrt((dist2D ** 2) + ((z1 - z2) ** 2));
    console.log(dist3D);
}
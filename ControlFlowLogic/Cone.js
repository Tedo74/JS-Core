function cone(r, h) {
    let volume = Math.PI * r * r * h / 3;
    console.log("volume = " + volume);

    let s = Math.sqrt(r * r + h * h);
    let area = Math.PI * r * (r + s);
    console.log("area = " + area);
}
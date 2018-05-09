function figArea(w, h, W, H) {
    let fig1 = W * H;
    let fig2 = w * h;
    let figToSubtract = Math.min(H, h) * Math.min(W, w);

    let totalArea = fig1 + fig2 - figToSubtract;
    console.log(totalArea);
}
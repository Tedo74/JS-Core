function distance(arr) {
    let[v1Speed, v2Speed, time] = arr;
    let s1 = v1Speed * 1000 / 3600 * time;
    let s2 = v2Speed * 1000 / 3600 * time;
    let diff = Math.abs(s1 - s2);
    console.log(diff);
}
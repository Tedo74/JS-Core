function formatHelper(arr) {
    let text = arr[0];
    text = text
        .replace(/[.,!?:;]\s*/g, (match) => {
            return match.trim() + ' '
        })
        .replace(/\s+([.,!?:;])/g, (match, g1) => {
            return g1;
        })
        .replace(/\.\s*\.\s*\.\s*!/, '...!')
        .replace(/(\.\s+)(\d)/g, (match, g1, g2) => {
            return g1.trim() + g2;
        })
        .replace(/\"([^\"]+)\"/g, (match, g1) =>{
            return `\"${g1.trim()}\"`
        });

    console.log(text);
}

formatHelper([`Terribly formatted text      .  With chaotic "spacings" ." Terrible quoting   "! Also this date is pretty confusing : 20   .   12.  16 .`]);
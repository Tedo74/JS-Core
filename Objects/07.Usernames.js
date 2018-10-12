function users(arr) {
    let names = new Set(arr);
    let sortedUsers = [...names].sort((a,b)=>{
        return a.length - b.length || a.localeCompare(b);
    });
    sortedUsers.forEach(u => {
        console.log(u);
    });
}

users([
    'Ashton',
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'

]);
function browserLogger(browserObj, commandsArr) {
    let commands = {
        Open: function (site) {

            open.push(site);
            logs.push(`Open ${site}`);
        },
        Close: function (site) {
            
            if (open.includes(site)) {
                let index = open.indexOf(site);
                open.splice(index, 1);
                recent.push(site);
                logs.push(`Close ${site}`);
            }
        }
    };

    let browser = browserObj['Browser Name'];
    let open = browserObj['Open Tabs'];
    let recent = browserObj['Recently Closed'];
    let logs = browserObj['Browser Logs'];

    for (let line of commandsArr) {
        if (line.trim() === 'Clear History and Cache') {
            logs = [];
            open = [];
            recent = [];
            continue;
        }
        let [currentCommand, site] = line.split(/\s+/g);
        commands[currentCommand](site);
    }

    console.log(browser);
    console.log(`Open Tabs: ${open.join(', ')}`);
    console.log(`Recently Closed: ${recent.join(', ')}`);
    console.log(`Browser Logs: ${logs.join(', ')}`);


}

browserLogger(
    {
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
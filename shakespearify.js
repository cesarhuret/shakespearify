chrome.action.onClicked.addListener(async (tab) => {
    await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: shakespearify,
      });
});

const shakespearify = () => {
    const replacements = [
        ['Your', 'Thy'],
        ['your', 'thy'],
        ['you', 'thou'], 
        ['You', 'Thou'],
        ['think', 'bethink'],
        ['Think', 'Bethink'],
        ['Know', 'Knoweth'],
        ['know', 'knoweth'],
        ['are', 'art'],
        ['Are', 'Art'], 
    ]
    
    replacements.forEach(element => {
        document.body.innerHTML = 
            document.body.innerHTML.replaceAll(
                element[0], element[1]
            );    
    });
}
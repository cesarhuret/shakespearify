chrome.action.onClicked.addListener(async (tab) => {
    await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: shakespearify,
      });
});

const shakespearify = () => {
    const replacements = [
                ['your', 'thy'],
                ['Your', 'Thy'],
                ['you', 'thou'], 
                ['You', 'Thou'],
            ]
            replacements.forEach(element => {
                document.body.innerHTML = 
                    document.body.innerHTML.replaceAll(
                        element[0], element[1]
                    );    
            });
}
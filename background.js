chrome.runtime.onInstalled.addListener(function() {

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions:[new chrome.declarativeContent.PageStateMatcher({
                pageUrl:{hostEquals: 'https://www.youtube.com'}
            })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
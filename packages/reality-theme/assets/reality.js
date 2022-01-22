require([
    'gitbook',
    'jquery'
], function(gitbook, $) {
    //
    function SetPageTopics(){
        console.log("SetPageTopics")
        var headers = $("h2,h3")
        var topics = $(".companion-topics");

        for(var i = 0; i < headers.length; i++){
            console.log("setting toping");
            var header = headers[i];
            var tag = `lv-${header.tagName}`;
            var topic = `<a class='btn ${tag}' href="#${header.id}">${header.textContent}</a>`;
            topics.append(topic);
        }
    }   

    gitbook.events.on('page.change', function() {
        SetPageTopics();
    });

    // Initialize gitbook.reality
    gitbook.reality = {};

    gitbook.reality.openFeedbackPage = (version, language, path) => {
        var args = `
[Enter feedback here]

---
⚠ *Do not edit this section.*

* Version: '${version}'
* Language: '${language}'
* Page: '${path}'
`;
        window.open(encodeURI('https://github.com/realitymod/Manual/issues/new?body=' + args), '_blank');
    };
});

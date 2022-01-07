require([
    'gitbook',
    'jquery'
], function(gitbook, $) {
    //
    function SetPageTopics(){
        console.log("SetPageTopics")
        var headers = $.merge($("h2"), $("h3"));
        var topics = $(".companion-topics");

        console.log("headers:" + headers.length);
        console.log("topics:" + topics.length);
        for(var i = 0; i < headers.length; i++){
            console.log("setting toping");
            var header = headers[i];
            var topic = `<a class='btn' href="#${header.id}">${header.textContent}</a>`;
            topics.append(topic);
        }
    }   

    gitbook.events.on('page.change', function() {
        console.log("onPageChanged")
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

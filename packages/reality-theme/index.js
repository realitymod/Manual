module.exports = {
    // Map of hooks
    hooks: {},

    // Map of new blocks
    blocks: {
        figure: {
            process: function(fig) {
                if(!fig || !fig.args || fig.args.length == 0) {return '';}
                
                var src = fig.args[0];
                var alt = fig.args.length > 1 ? fig.args[1] : '';
                var caption = fig.body;
                return `<figure>
    <img src="${src}" alt="${caption}">
    <figcaption>${caption}</figcaption>
</figure>`;
            }
        },
        note: {
            process: function(note) {
                note = note || {};
                return `<div class="note">
    <div class="title">Note:</div>
    <div class="content">${note.body}</div>
</div>`;
            }
        }
    },

    // Map of new filters
    filters: {
        youtube: function(title, videoId, kwargs) {
            kwargs = kwargs || {};
            var width = kwargs['width'] || 560;
            var height = kwargs['height'] || 315;

            return `<div class='youtube flex column center'>
<iframe width="${width}" height="${height}" src="https://www.youtube-nocookie.com/embed/${videoId}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div class="caption">${title}</div>
</div>`;
        }
    },

    book: {
        assets: './assets',
        js: ['reality.js'],
        css: [
            'reality.css'
        ]
    }
};
/*
 * veryfizzyjelly blog
 */

/**
 * Custom config object
 * --
 * These settings will override the default settings
 * @type {Object}
 */
module.exports = {
    // Module Options
    moduleOpts: {
        nav         : [],
        port        : 3001,
        customPath  : '/public/',
        favicon     : 'favicon.png',
        logo        : 'vfj-logo.png'
    },

    // Template Options
    tmplOpts: {

        engine  : 'hogan',
        path    : './default/'

    },

    // GithubApi Config Options
    githubapi : {

        apiOpts : {
            version     : '3.0.0',
            timeout     : 5000
        },

        contentOpts : {
            user        : 'mattstyles',
            repo        : 'vfj-content',
            path        : null
        }
    },

    // Marked Config Options
    markedOpts : {

        gfm         : true,
        tables      : true,
        breaks      : false,
        pedantic    : false,
        sanitize    : false,
        smartLists  : true,
        langPrefix  : 'language-',
        highlight   : function ( code, lang ) {
            // Javascript highlighting
            if ( lang === 'js' ) {
                return highlighter.javascript(code);
            }
            return code;
        }
    }
}
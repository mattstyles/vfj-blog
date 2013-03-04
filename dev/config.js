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
        path    : './vfj/'

    },

    // GithubApi Config Options
    githubapi : {

        apiOpts : {
            version     : '3.0.0',
            timeout     : 5000
        },

        contentOpts : {
            user        : 'mattstyles',
//            repo        : 'vfj-content',
            repo        : 'vpf-def',
            path        : null
        }
    }
};
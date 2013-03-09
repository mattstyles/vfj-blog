/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    less: {
      dev: {
        options: {
          paths: ["dev/public/less"]
        },
        files: {
          "dev/public/css/app.css": "dev/public/less/app.less"
        }
      },
      dist: {
        options: {
          paths: ["dev/public/less"]
        },
        files: {
          "dist/public/css/app.css": "dev/public/less/app.less"
        }
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['dev/public/js/<%= pkg.name %>.js'],
        dest: 'dist/public/js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/public/js/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      },
      dist: {
        src: [ 'dev/public/js/*.js' ]
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    },
    copy: {
        dist: {
            files: [
                { src: ['dev/public/img/*'], dest:'dist/public/img/' },
                { expand:true, flatten:true, src: ['dev/public/templates/vfj/*'], dest:'dist/public/templates/vfj/' },
                { expand:true, flatten:true, filter: 'isFile', src: ['dev/public/*'], dest:'dist/public/' },
                { expand:true, flatten:true, filter: 'isFile', src: ['dev/*'], dest:'dist/' }
            ]
        }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  grunt.registerTask( 'default', ['jshint', 'concat', 'uglify'] );
  grunt.registerTask( 'dev', ['less:dev'] );
  grunt.registerTask( 'dist', ['less:dist', 'jshint:dist', 'concat', 'uglify', 'copy:dist'] );

};

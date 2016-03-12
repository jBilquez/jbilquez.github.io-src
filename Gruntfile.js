module.exports = function(grunt) {

grunt.initConfig({
    "pkg": grunt.file.readJSON('package.json'),
    "concat": {
        options: {
            separator: ';'
        },
        dist: {
            src: ['src/js/lib/react.0.14.7.js', 'src/js/lib/react-dom.0.14.7.js', 'src/js/lib/ReactRouter.2.0.1.js'],
            dest: 'dist/js/react-package.js'
        }
    },
    
    "uglify": {
        options: {
            mangle: {
                except: ['React', 'ReactDom', 'ReactRouter']
            }
        },
        react: {
            files: {
                'dist/js/react-package.js': ['src/js/lib/react.0.14.7.js', 'src/js/lib/react-dom.0.14.7.js', 'src/js/lib/ReactRouter.2.0.1.js'],
            }
        },
        app: {
            files: {
                'dist/js/app.min.js': ['dist/js/app.js']
            }
        }
    },
            
    "copy": {
        dist: {
            files: [
            {
                expand: true,
                cwd: 'node_modules/react/dist',
                src: 'react.js',
                dest: 'dist/js'
            },
            {
                expand: true,
                cwd: 'node_modules/react-dom/dist',
                src: 'react-dom.js',
                dest: 'dist/js'
            },
            {
                expand: true,
                cwd: 'src/css',
                src: '*.css',
                dest: 'dist/css'
            },
            {
                expand: true,
                cwd: 'src/img',
                src: '**',
                dest: 'dist/img'
            },
            { src: 'src/favicon.ico', dest: 'dist/favicon.ico' }
            
            
            ]
        }
    },
    "browserify": {
        dist: {
            files: {
                'dist/js/app.js': ['src/js/app.jsx']
            },
            options: {
                debug: true,
                transform: [
                    ['browserify-shim', {'global': true}],
                    ['babelify', {'stage': 0, 'loose': 'all'}],
                ],
                external: ['react', 'react-dom', 'react-router']
            }
        }
    },
    "htmlmin": {
        dist: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                'dist/index.html': 'src/index.html'
            }
        }
    }
	
});

grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-browserify');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-contrib-uglify');


grunt.registerTask("default", ["copy:dist", "browserify:dist", "htmlmin:dist", "uglify:app"]);
grunt.registerTask("uglify-react", ["uglify:react"]);

};

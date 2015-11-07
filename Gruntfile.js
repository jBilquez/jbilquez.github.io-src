module.exports = function(grunt) {

grunt.initConfig({
    "pkg": grunt.file.readJSON('package.json'),
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
            { src: 'node_modules/node-waves/dist/waves.min.css', dest: 'dist/css/waves.min.css' },
            { src: 'node_modules/node-waves/dist/waves.min.js', dest: 'dist/js/waves.min.js' }
            
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

grunt.registerTask("default", ["copy:dist", "browserify:dist", "htmlmin:dist"]);

};

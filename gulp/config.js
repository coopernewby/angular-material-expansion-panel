exports.paths = {
  src: 'src/',
  app: 'app/',
  dest: 'public/',
  build: 'build/',
  scripts: ['src/expansionPanel.js', 'src/*.js', 'src/**/*.js', '!src/*.spec.js', '!src/**/*.spec.js'],
  appScripts: ['app/app.js', 'app/*.js', 'app/**/*.js'],
  css: ['src/*.scss', 'src/*.css'],
  appCss: ['app/style.css', 'app/**/*.css'],
  injectCss: ['public/*.css', 'public/**/*.css'],
  partials: ['app/**/*.html'],
  bower: './bower.json'
};
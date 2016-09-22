
var elixir = require('laravel-elixir');



elixir(function(mix) {

    mix.scripts([
        'helpers.js',
        'connector.js',
        'Slide.js',
        'editor.js'
    ]);


    // presentation
    mix.browserify([
        'components/presentation/Presentation.js',
        'components/presentation/app.js'
    ],'public/js/presentation.js');

    // editor
    mix.browserify([
        'components/editor/LessonEditor.js',
        'components/editor/app.js'
    ],'public/js/editor.js');


});


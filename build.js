({
    appDir: "./",
    baseDir: "./js",
    dir: "./build",
    mainConfigFile: './js/main.js',
    optimize: "uglify",
    skipModuleInsertion: true,
    uglify: {
        max_line_length: 80
    },
    removeCombined: false,
    modules: [
        {
            name: "js/main",
            include: ['jquery', 'enquire']
        },
        {
            name: "lib/MathJax/MathJax",
            // include: [
            // 	"lib/MathJax/config/TeX-AMS_HTML",
            // 	"lib/MathJax/jax/output/HTML-CSS/jax",
            // 	"lib/MathJax/jax/output/HTML-CSS/fonts/TeX/fontdata",
            // 	"lib/MathJax/jax/output/HTML-CSS/fonts/TeX/AMS/Regular/Main",
            // 	"lib/MathJax/jax/output/HTML-CSS/fonts/TeX/AMS/Regular/BBBold",
            // 	"lib/MathJax/jax/output/HTML-CSS/autoload/mtable"
            // ]
        }
    ],
    fileExclusionRegExp: /(^\.)/,
})

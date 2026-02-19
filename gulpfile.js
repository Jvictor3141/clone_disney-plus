const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() { //A função scripts é responsável por minificar os arquivos JavaScript presentes na pasta ./src/scripts, utilizando o plugin gulp-uglify para reduzir o tamanho dos arquivos. Os arquivos minificados são então salvos na pasta ./dist/js, prontos para serem utilizados em produção.
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function styles () { //A função styles é responsável por compilar os arquivos Sass (.scss) em CSS, aplicando a opção de compressão para reduzir o tamanho do arquivo final. Ela utiliza o plugin gulp-sass para realizar essa tarefa, e os arquivos resultantes são salvos na pasta ./dist/css.
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ style: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function images () { //A função images é responsável por otimizar as imagens presentes na pasta ./src/images, utilizando o plugin gulp-imagemin para reduzir o tamanho dos arquivos sem comprometer a qualidade visual. As imagens otimizadas são então salvas na pasta ./dist/images, prontas para serem utilizadas em produção.
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images, scripts); //A tarefa padrão do Gulp é definida usando gulp.parallel, que permite executar as funções styles, images e scripts simultaneamente. Isso significa que quando o comando "gulp" é executado no terminal, todas essas tarefas serão iniciadas ao mesmo tempo, otimizando o processo de construção do projeto.

exports.watch = function() { //A função watch é responsável por monitorar as alterações nos arquivos de estilos e scripts. Ela utiliza o método gulp.watch para observar as mudanças nos arquivos .scss e .js, e quando uma alteração é detectada, as funções styles e scripts são executadas automaticamente para compilar os estilos e minificar os scripts, garantindo que as últimas alterações sejam refletidas no projeto sem a necessidade de executar manualmente as tarefas.
    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./src/scripts/*.js', scripts);
}
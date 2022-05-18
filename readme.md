##CSK-FRONTEND

###Frontend Structure

```
.
├── resources
│   └── assets
│       ├── fonts
│       ├── images
│       ├── js
│       │   ├── app.js
│       │   ├── bootstrap.js
│       │   └── main
│       └── sass
│           ├── animate.scss
│           ├── app.scss
│           ├── bootstrap
│           │   ├── _variables.scss
│           │   ├── bootstrap.scss
│           │   ├── grid.scss
│           │   ├── reboot.scss
│           │   └── reset.scss
│           ├── fonts.scss
│           ├── main
│           ├── mixins.scss
│           └── theme.scss
```

####List of Libs JS

* @types/jquery version: ^3.2.17 [http://api.jquery.com/]
* jquery-validation version: ^1.17.0 [https://jqueryvalidation.org/documentation/]
* jquery-mask-plugin version: ^1.14.13 [https://igorescobar.github.io/jQuery-Mask-Plugin/docs.html]
* @fancyapps/fancybox version: ^3.2.5 [https://fancyapps.com/fancybox/3/docs/]
* Slick-Carousel version: ^1.8.1 - [http://kenwheeler.github.io/slick/]



>Using babel to create our JS scripts in ES6, thus doing the transpilation for ES5, which today is almost 100% supported by browsers.
>Example codes in ES6:

>```
>class MyApp {
>
>     constructor (name) {
>         this.name = name;
>     }
>}
>
>$(document).ready(function(){
>	new MyApp ('Pedro');
>});
>```
>
>Also using jQuery to help us write fewer native Javascript codes.

####List of Libs Sass

* Bootstrap 4 Grids and Reboot version: 4.0 [https://getbootstrap.com/docs/4.0/layout/grid/]
'use strict';

module.exports = function() {

   var vendors = {
       scripts: [
           './client/vendors/html5shiv/dist/html5shiv.min.js',
           './client/vendors/respond/dest/respond.src.js'
       ],
       styles: []
   };

    var components = [
        './client/src/**/*.js',
        '!./client/src/**/*.spec.js'
    ];

   return {
     paths: {
         src: {
             vendors: {
                 scripts: vendors.scripts,
                 styles: vendors.styles
             },
             components: components
         }
     }
   };
};
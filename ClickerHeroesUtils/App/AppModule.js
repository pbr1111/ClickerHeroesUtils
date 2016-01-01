/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/js-md5/md5.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
var App;
(function (App) {
    var Utils;
    (function (Utils) {
        var app = angular.module("AppModule", [
            'DirectivesModule',
            'UtilsModule',
        ]);
    })(Utils = App.Utils || (App.Utils = {}));
})(App || (App = {}));
;
//# sourceMappingURL=AppModule.js.map
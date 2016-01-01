/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/js-md5/md5.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var App;
(function (App) {
    var Calc;
    (function (Calc) {
        var app = angular.module("ClickerHeroesWeb", []);
        app.controller(Calc.CalcController.ControllerId, Calc.CalcController);
    })(Calc = App.Calc || (App.Calc = {}));
})(App || (App = {}));
//# sourceMappingURL=CalcModule.js.map
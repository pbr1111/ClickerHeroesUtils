var App;
(function (App) {
    var Utils;
    (function (Utils) {
        var app = angular.module("DirectivesModule", [])
            .directive('jsonTextArea', [function () { return new App.Web.Directives.JsonTextArea.JsonTextAreaDirective(); }])
            .directive('navBar', [function () { return new App.Web.Directives.NavBar.NavBarDirective(); }])
            .directive('titleNavBar', [function () { return new App.Web.Directives.TitleNavBar.TitleNavBarDirective(); }]);
    })(Utils = App.Utils || (App.Utils = {}));
})(App || (App = {}));
//# sourceMappingURL=DirectivesModule.js.map
module App.Utils {

    var app = angular.module("DirectivesModule", [])
        .directive('jsonTextArea', [() => new Web.Directives.JsonTextArea.JsonTextAreaDirective()])
        .directive('navBar', [() => new Web.Directives.NavBar.NavBarDirective()])
        .directive('titleNavBar', [() => new Web.Directives.TitleNavBar.TitleNavBarDirective()]);
}
var App;
(function (App) {
    var Utils;
    (function (Utils) {
        var UtilsController = (function () {
            function UtilsController($scope) {
                this.$scope = $scope;
                this.$scope.tabs = [
                    { Title: 'Save Editor', Active: true, TemplateUrl: 'App/Utils/Editor/Editor.html' },
                ];
            }
            UtilsController.ControllerId = "UtilsController";
            UtilsController.$inject = ['$scope'];
            return UtilsController;
        })();
        Utils.UtilsController = UtilsController;
    })(Utils = App.Utils || (App.Utils = {}));
})(App || (App = {}));
//# sourceMappingURL=UtilsController.js.map
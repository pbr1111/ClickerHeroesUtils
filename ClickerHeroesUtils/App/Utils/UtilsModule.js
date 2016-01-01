var App;
(function (App) {
    var Utils;
    (function (Utils) {
        var app = angular.module("UtilsModule", [])
            .controller(Utils.UtilsController.ControllerId, Utils.UtilsController)
            .controller(Utils.Editor.EditorController.ControllerId, Utils.Editor.EditorController);
    })(Utils = App.Utils || (App.Utils = {}));
})(App || (App = {}));
//# sourceMappingURL=UtilsModule.js.map
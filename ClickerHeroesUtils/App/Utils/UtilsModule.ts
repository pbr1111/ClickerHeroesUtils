module App.Utils {

    var app = angular.module("UtilsModule", [])
        .controller(UtilsController.ControllerId, UtilsController)
        .controller(Editor.EditorController.ControllerId, Editor.EditorController);
}
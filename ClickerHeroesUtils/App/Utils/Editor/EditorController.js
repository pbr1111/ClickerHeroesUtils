var App;
(function (App) {
    var Utils;
    (function (Utils) {
        var Editor;
        (function (Editor) {
            var EditorController = (function () {
                function EditorController($scope) {
                    var _this = this;
                    this.$scope = $scope;
                    this.$scope.saveGame = null;
                    this.$scope.saveString = null;
                    this.$scope.editedSaveString = null;
                    this.$scope.selectedTab = null;
                    this.$scope.tabs = [
                        { Title: 'Import', Active: true, TemplateUrl: 'App/Utils/Editor/EditorImport.html', OnNext: function () { return _this.OnImport(); } },
                        { Title: 'Edit', Active: false, TemplateUrl: 'App/Utils/Editor/EditorEdit.html', OnPrevious: function () { return _this.DeleteSaveGame(); }, OnNext: function () { return _this.OnEditImport(); } },
                        { Title: 'Result', Active: false, TemplateUrl: 'App/Utils/Editor/EditorResult.html', OnPrevious: function () { return _this.DeleteEditedSaveString(); } }
                    ];
                    this.$scope.onClickResult = function () { return _this.OnClickResult(); };
                }
                EditorController.prototype.DeleteSaveGame = function () {
                    this.$scope.saveGame = null;
                };
                EditorController.prototype.DeleteEditedSaveString = function () {
                    this.$scope.editedSaveString = null;
                };
                EditorController.prototype.OnClickResult = function () {
                    $("#resultTextArea").select();
                };
                EditorController.prototype.OnImport = function () {
                    if (this.$scope.saveString) {
                        var importString = this.$scope.saveString.trim();
                        if (importString.search(App.Model.SaveGameUtils.ANTI_CHEAT_CODE) != -1) {
                            var result = importString.split(App.Model.SaveGameUtils.ANTI_CHEAT_CODE);
                            importString = App.Model.SaveGameUtils.UnSprinkle(result[0]);
                            if (md5(importString + App.Model.SaveGameUtils.SALT) != result[1]) {
                                alert("Bad hash");
                                return false;
                            }
                            this.$scope.saveGame = angular.fromJson(atob(importString));
                            return true;
                        }
                    }
                    alert("Invalid save");
                    return false;
                };
                EditorController.prototype.OnEditImport = function () {
                    if (this.$scope.saveGame != null) {
                        var save = btoa(angular.toJson(this.$scope.saveGame));
                        this.$scope.editedSaveString = App.Model.SaveGameUtils.Sprinkle(save.trim()) + App.Model.SaveGameUtils.ANTI_CHEAT_CODE + md5(save + App.Model.SaveGameUtils.SALT);
                        return true;
                    }
                    alert("Invalid save");
                    return false;
                };
                EditorController.ControllerId = "EditorController";
                EditorController.$inject = ['$scope'];
                return EditorController;
            })();
            Editor.EditorController = EditorController;
        })(Editor = Utils.Editor || (Utils.Editor = {}));
    })(Utils = App.Utils || (App.Utils = {}));
})(App || (App = {}));
//# sourceMappingURL=EditorController.js.map
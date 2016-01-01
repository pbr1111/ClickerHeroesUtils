module App.Utils.Editor {

    interface IEditorControllerScope extends ng.IScope {
        saveString: string;
        editedSaveString: string;
        saveGame: App.Model.ISaveGame;
        tabs: Array<App.Web.Model.ITab>;
        selectedTab: App.Web.Model.ITab;
        onClickResult: Function;
    }

    export class EditorController {
        static ControllerId = "EditorController";
        static $inject = ['$scope'];

        constructor(private $scope: IEditorControllerScope) {
            this.$scope.saveGame = null;
            this.$scope.saveString = null;
            this.$scope.editedSaveString = null;
            this.$scope.selectedTab = null;
            this.$scope.tabs = [
                { Title: 'Import', Active: true, TemplateUrl: 'App/Utils/Editor/EditorImport.html', OnNext: () => this.OnImport() },
                { Title: 'Edit', Active: false, TemplateUrl: 'App/Utils/Editor/EditorEdit.html', OnPrevious: () => this.DeleteSaveGame(), OnNext: () => this.OnEditImport() },
                { Title: 'Result', Active: false, TemplateUrl: 'App/Utils/Editor/EditorResult.html', OnPrevious: () => this.DeleteEditedSaveString() }
            ];
            this.$scope.onClickResult = () => this.OnClickResult();
        }

        private DeleteSaveGame() {
            this.$scope.saveGame = null;
        }

        private DeleteEditedSaveString() {
            this.$scope.editedSaveString = null;
        }

        private OnClickResult() {
            $("#resultTextArea").select();
        }

        private OnImport(): boolean {
            if (this.$scope.saveString) {
                var importString = this.$scope.saveString.trim();
                if (importString.search(Model.SaveGameUtils.ANTI_CHEAT_CODE) != -1) {
                    var result = importString.split(Model.SaveGameUtils.ANTI_CHEAT_CODE);
                    importString = App.Model.SaveGameUtils.UnSprinkle(result[0]);
                    if (md5(importString + Model.SaveGameUtils.SALT) != result[1]) {
                        alert("Bad hash");
                        return false;
                    }
                    this.$scope.saveGame = angular.fromJson(atob(importString));
                    return true;
                }
            }
            alert("Invalid save");
            return false;
        }

        private OnEditImport() {
            if (this.$scope.saveGame != null) {
                var save = btoa(angular.toJson(this.$scope.saveGame));
                this.$scope.editedSaveString = App.Model.SaveGameUtils.Sprinkle(save.trim()) + Model.SaveGameUtils.ANTI_CHEAT_CODE + md5(save + Model.SaveGameUtils.SALT);
                return true;
            }
            alert("Invalid save");
            return false;
        }        
    }
}
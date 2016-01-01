module App.Utils {

    interface IUtilsControllerScope extends ng.IScope {
        tabs: Array<App.Web.Model.ITab>;
        selectedTab: App.Web.Model.ITab;
    }

    export class UtilsController {
        static ControllerId = "UtilsController";
        static $inject = ['$scope'];

        constructor(private $scope: IUtilsControllerScope) { 
            this.$scope.tabs = [
                { Title: 'Save Editor', Active: true, TemplateUrl: 'App/Utils/Editor/Editor.html' },
            ];
        }

    }
}
module App.Web.Directives.NavBar {

    interface INavBarDirectiveScope extends ng.IScope {
        title: string;
        tabs: Array<App.Web.Model.ITab>;
        selectedTab: App.Web.Model.ITab;
        onSelectTab: (selectedTab: App.Web.Model.ITab) => void;
    }

    export class NavBarDirectiveController {
        static $inject = ['$scope'];

        constructor(public $scope: INavBarDirectiveScope) {
            this.$scope.selectedTab = this.GetSelectedTab();
            this.$scope.onSelectTab = (selectedTab: App.Web.Model.ITab) => this.OnSelectTab(selectedTab);
        }

        private GetSelectedTab(): App.Web.Model.ITab {
            return this.$scope.tabs.filter((tab: App.Web.Model.ITab) => {
                return tab.Active;
            })[0];
        }

        private OnSelectTab(selectedTab: App.Web.Model.ITab) {
            if (this.$scope.selectedTab != selectedTab) {
                angular.forEach(this.$scope.tabs, (tab: App.Web.Model.ITab) => {
                    if (tab.Active)
                        tab.Active = false;
                    if (tab == selectedTab)
                        tab.Active = true;
                });
                this.$scope.selectedTab = selectedTab;
            }
        }
    }

    export class NavBarDirective {

        constructor() {
            return <any>this.CreateDirective();
        }

        private CreateDirective(): ng.IDirective {
            return {
                restrict: 'E',
                scope: {
                    title: '@',
                    tabs: '=',
                    selectedTab: '=',
                },
                templateUrl: "App/Web/Directives/NavBar/NavBar.html",
                controller: NavBarDirectiveController,
            };
        }
    }
}
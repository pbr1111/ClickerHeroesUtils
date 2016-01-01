module App.Web.Directives.TitleNavBar {

    interface ITitleNavBarDirectiveScope extends ng.IScope {
        tabs: Array<App.Web.Model.ITab>;
        selectedTab: App.Web.Model.ITab;
        onPrevious: Function;
        onNext: Function;
        showPrevious: boolean;
        showNext: boolean;
    }

    export class TitleNavBarDirectiveController {
        static $inject = ['$scope'];

        constructor(public $scope: ITitleNavBarDirectiveScope) {
            this.$scope.selectedTab = this.GetSelectedTab();
            this.$scope.onPrevious = () => this.OnPrevious();
            this.$scope.onNext = () => this.OnNext();
            this.SetButtonsVisibility();
        }

        private OnPrevious() {
            var index = this.GetTabIndex(this.$scope.selectedTab);
            if (index > 0 && index <= this.$scope.tabs.length - 1) {
                if (angular.isDefined(this.$scope.selectedTab.OnPrevious)) {
                    this.$scope.selectedTab.OnPrevious();
                }
                this.OnSelectTab(this.$scope.tabs[index - 1]);
            }
        }

        private OnNext() {
            var index = this.GetTabIndex(this.$scope.selectedTab);
            if (index >= 0 && index < this.$scope.tabs.length - 1) {
                var valid = true;
                if (angular.isDefined(this.$scope.selectedTab.OnNext)) {
                    valid = this.$scope.selectedTab.OnNext();
                }
                if (valid) {
                    this.OnSelectTab(this.$scope.tabs[index + 1]);
                }
            }
        }

        private GetTabIndex(tab: App.Web.Model.ITab) {
            return this.$scope.tabs.indexOf(tab);
        }

        private GetSelectedTab(): App.Web.Model.ITab {
            return this.$scope.tabs.filter((tab: App.Web.Model.ITab) => {
                return tab.Active;
            })[0];
        }

        private SetButtonsVisibility() {
            var index = this.GetTabIndex(this.$scope.selectedTab);
            this.$scope.showPrevious = index > 0;
            this.$scope.showNext = index < this.$scope.tabs.length - 1;
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
                this.SetButtonsVisibility();
            }
        }
    }

    export class TitleNavBarDirective {

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
                templateUrl: "App/Web/Directives/TitleNavBar/TitleNavBar.html",
                controller: TitleNavBarDirectiveController,
            };

        }
    }
}
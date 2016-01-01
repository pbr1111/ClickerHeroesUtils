var App;
(function (App) {
    var Web;
    (function (Web) {
        var Directives;
        (function (Directives) {
            var NavBar;
            (function (NavBar) {
                var NavBarDirectiveController = (function () {
                    function NavBarDirectiveController($scope) {
                        var _this = this;
                        this.$scope = $scope;
                        this.$scope.selectedTab = this.GetSelectedTab();
                        this.$scope.onSelectTab = function (selectedTab) { return _this.OnSelectTab(selectedTab); };
                    }
                    NavBarDirectiveController.prototype.GetSelectedTab = function () {
                        return this.$scope.tabs.filter(function (tab) {
                            return tab.Active;
                        })[0];
                    };
                    NavBarDirectiveController.prototype.OnSelectTab = function (selectedTab) {
                        if (this.$scope.selectedTab != selectedTab) {
                            angular.forEach(this.$scope.tabs, function (tab) {
                                if (tab.Active)
                                    tab.Active = false;
                                if (tab == selectedTab)
                                    tab.Active = true;
                            });
                            this.$scope.selectedTab = selectedTab;
                        }
                    };
                    NavBarDirectiveController.$inject = ['$scope'];
                    return NavBarDirectiveController;
                })();
                NavBar.NavBarDirectiveController = NavBarDirectiveController;
                var NavBarDirective = (function () {
                    function NavBarDirective() {
                        return this.CreateDirective();
                    }
                    NavBarDirective.prototype.CreateDirective = function () {
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
                    };
                    return NavBarDirective;
                })();
                NavBar.NavBarDirective = NavBarDirective;
            })(NavBar = Directives.NavBar || (Directives.NavBar = {}));
        })(Directives = Web.Directives || (Web.Directives = {}));
    })(Web = App.Web || (App.Web = {}));
})(App || (App = {}));
//# sourceMappingURL=NavBarDirective.js.map
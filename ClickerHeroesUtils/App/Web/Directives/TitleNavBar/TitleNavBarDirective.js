var App;
(function (App) {
    var Web;
    (function (Web) {
        var Directives;
        (function (Directives) {
            var TitleNavBar;
            (function (TitleNavBar) {
                var TitleNavBarDirectiveController = (function () {
                    function TitleNavBarDirectiveController($scope) {
                        var _this = this;
                        this.$scope = $scope;
                        this.$scope.selectedTab = this.GetSelectedTab();
                        this.$scope.onPrevious = function () { return _this.OnPrevious(); };
                        this.$scope.onNext = function () { return _this.OnNext(); };
                        this.SetButtonsVisibility();
                    }
                    TitleNavBarDirectiveController.prototype.OnPrevious = function () {
                        var index = this.GetTabIndex(this.$scope.selectedTab);
                        if (index > 0 && index <= this.$scope.tabs.length - 1) {
                            if (angular.isDefined(this.$scope.selectedTab.OnPrevious)) {
                                this.$scope.selectedTab.OnPrevious();
                            }
                            this.OnSelectTab(this.$scope.tabs[index - 1]);
                        }
                    };
                    TitleNavBarDirectiveController.prototype.OnNext = function () {
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
                    };
                    TitleNavBarDirectiveController.prototype.GetTabIndex = function (tab) {
                        return this.$scope.tabs.indexOf(tab);
                    };
                    TitleNavBarDirectiveController.prototype.GetSelectedTab = function () {
                        return this.$scope.tabs.filter(function (tab) {
                            return tab.Active;
                        })[0];
                    };
                    TitleNavBarDirectiveController.prototype.SetButtonsVisibility = function () {
                        var index = this.GetTabIndex(this.$scope.selectedTab);
                        this.$scope.showPrevious = index > 0;
                        this.$scope.showNext = index < this.$scope.tabs.length - 1;
                    };
                    TitleNavBarDirectiveController.prototype.OnSelectTab = function (selectedTab) {
                        if (this.$scope.selectedTab != selectedTab) {
                            angular.forEach(this.$scope.tabs, function (tab) {
                                if (tab.Active)
                                    tab.Active = false;
                                if (tab == selectedTab)
                                    tab.Active = true;
                            });
                            this.$scope.selectedTab = selectedTab;
                            this.SetButtonsVisibility();
                        }
                    };
                    TitleNavBarDirectiveController.$inject = ['$scope'];
                    return TitleNavBarDirectiveController;
                })();
                TitleNavBar.TitleNavBarDirectiveController = TitleNavBarDirectiveController;
                var TitleNavBarDirective = (function () {
                    function TitleNavBarDirective() {
                        return this.CreateDirective();
                    }
                    TitleNavBarDirective.prototype.CreateDirective = function () {
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
                    };
                    return TitleNavBarDirective;
                })();
                TitleNavBar.TitleNavBarDirective = TitleNavBarDirective;
            })(TitleNavBar = Directives.TitleNavBar || (Directives.TitleNavBar = {}));
        })(Directives = Web.Directives || (Web.Directives = {}));
    })(Web = App.Web || (App.Web = {}));
})(App || (App = {}));
//# sourceMappingURL=TitleNavBarDirective.js.map
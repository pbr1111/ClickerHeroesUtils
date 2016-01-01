var App;
(function (App) {
    var Web;
    (function (Web) {
        var Directives;
        (function (Directives) {
            var JsonTextArea;
            (function (JsonTextArea) {
                var JsonTextAreaDirective = (function () {
                    function JsonTextAreaDirective() {
                        return this.CreateDirective();
                    }
                    JsonTextAreaDirective.prototype.CreateDirective = function () {
                        var _this = this;
                        return {
                            restrict: 'A',
                            require: 'ngModel',
                            scope: {
                                ngModel: '='
                            },
                            link: function (scope, element, attrs, ngModelCtrl) { return _this.Link(scope, element, attrs, ngModelCtrl); },
                        };
                    };
                    JsonTextAreaDirective.prototype.Link = function (scope, element, attrs, ngModelCtrl) {
                        var lastValid;
                        ngModelCtrl.$parsers.push(fromUser);
                        ngModelCtrl.$formatters.push(toUser);
                        element.bind('blur', function () {
                            ngModelCtrl.$setViewValue(toUser(lastValid));
                            ngModelCtrl.$render();
                        });
                        scope.$watch(attrs.ngModel, function (newValue, oldValue) {
                            lastValid = lastValid || newValue;
                            if (newValue != oldValue) {
                                ngModelCtrl.$setViewValue(toUser(newValue));
                                ngModelCtrl.$render();
                            }
                        }, true);
                        function fromUser(text) {
                            if (!text || text.trim() === '') {
                                return {};
                            }
                            else {
                                try {
                                    lastValid = angular.fromJson(text);
                                }
                                catch (e) { }
                                return lastValid;
                            }
                        }
                        function toUser(object) {
                            return angular.toJson(object, true);
                        }
                    };
                    return JsonTextAreaDirective;
                })();
                JsonTextArea.JsonTextAreaDirective = JsonTextAreaDirective;
            })(JsonTextArea = Directives.JsonTextArea || (Directives.JsonTextArea = {}));
        })(Directives = Web.Directives || (Web.Directives = {}));
    })(Web = App.Web || (App.Web = {}));
})(App || (App = {}));
//# sourceMappingURL=JsonTextAreaDirective.js.map
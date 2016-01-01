module App.Web.Directives.JsonTextArea {

    interface INgModelAttributes extends ng.IAttributes {
        ngModel: any;
    }

    export class JsonTextAreaDirective {

        constructor() {
            return <any>this.CreateDirective();
        }

        private CreateDirective(): ng.IDirective {
            return {
                restrict: 'A',
                require: 'ngModel',
                scope: {
                    ngModel: '='
                },
                link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: INgModelAttributes, ngModelCtrl: ng.INgModelController) => this.Link(scope, element, attrs, ngModelCtrl),
            };
        }

        private Link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: INgModelAttributes, ngModelCtrl: ng.INgModelController) {
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
                } else {
                    try {
                        lastValid = angular.fromJson(text);
                    } catch (e) { }
                    return lastValid;
                }
            }

            function toUser(object) {
                return angular.toJson(object, true);
            }

        }
    }
}
var App;
(function (App) {
    var Model;
    (function (Model) {
        var SaveGameUtils = (function () {
            function SaveGameUtils() {
            }
            SaveGameUtils.UnSprinkle = function (saveGameString) {
                var result = [];
                for (var i = 0; i < saveGameString.length; i += 2) {
                    result.push(saveGameString[i]);
                }
                return result.join("");
            };
            SaveGameUtils.Sprinkle = function (saveGameString) {
                var result = [];
                for (var i = 0; i < saveGameString.length; i++) {
                    result.push(saveGameString[i]);
                    result.push(Model.SaveGameUtils.CHARACTERS.substr(Math.floor(Math.random() * (Model.SaveGameUtils.CHARACTERS.length - 1)), 1));
                }
                return result.join("");
            };
            SaveGameUtils.ANTI_CHEAT_CODE = "Fe12NAfA3R6z4k0z";
            SaveGameUtils.SALT = "af0ik392jrmt0nsfdghy0";
            SaveGameUtils.CHARACTERS = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
            return SaveGameUtils;
        })();
        Model.SaveGameUtils = SaveGameUtils;
    })(Model = App.Model || (App.Model = {}));
})(App || (App = {}));
//# sourceMappingURL=SaveGame.js.map
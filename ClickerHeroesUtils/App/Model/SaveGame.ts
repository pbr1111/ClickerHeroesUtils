module App.Model {
    export interface ISaveGame {
        heroCollection?: App.Model.Hero.IHeroCollection;
    }

    export class SaveGameUtils {
        public static ANTI_CHEAT_CODE: string = "Fe12NAfA3R6z4k0z";
        public static SALT: string = "af0ik392jrmt0nsfdghy0";
        public static CHARACTERS: string = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

        public static UnSprinkle(saveGameString: string) {
            var result = [];
            for (var i = 0; i < saveGameString.length; i += 2) {
                result.push(saveGameString[i]);
            }
            return result.join("");
        }

        public static Sprinkle(saveGameString: string) {
            var result = [];
            for (var i = 0; i < saveGameString.length; i++) {
                result.push(saveGameString[i]);
                result.push(Model.SaveGameUtils.CHARACTERS.substr(Math.floor(Math.random() * (Model.SaveGameUtils.CHARACTERS.length - 1)), 1));
            }
            return result.join("");
        }
    }
}
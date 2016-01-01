module App.Model.Hero {
    export interface IHero {
        id?: number;
        level?: number;
        
        assetId?: number;
        baseAttack?: number;
        baseClickDamage?: number;
        baseGoldPerSecond?: number;
        baseCost?: number;
        name?: string;
        description?: string;
        clickDamageFormula?: string;
        goldPerSecondFormula?: string;
        attackFormula?: string;
        costFormula?: string;
        specialSkill?: string;
        specialSkillDescription?: string;
    }
}
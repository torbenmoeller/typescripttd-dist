var TypeScriptTD;
(function (TypeScriptTD) {
    class TowerInstance {
        constructor() {
        }
        init() {
            if (this.Data.WeaponType == "DumbProjectile") {
                this.Weapon = new TypeScriptTD.DumbWeapon();
            }
            else if (this.Data.WeaponType == "LaserWeapon") {
                this.Weapon = new TypeScriptTD.LaserWeapon();
            }
            else if (this.Data.WeaponType == "SmartProjectile") {
                this.Weapon = new TypeScriptTD.SmartWeapon();
            }
            else if (this.Data.WeaponType == "RadialShockwave") {
                this.Weapon = new TypeScriptTD.WaveWeapon();
            }
            this.Weapon.ShotTexture = this.Data.ShotTexture;
            this.Weapon.TowerData = this.Data;
            this.TotalCost = this.Data.Cost;
        }
        Update(elapsedTime, gs) {
            //BuildTime
            //Selling
            //Weapon Update
            this.Weapon.Update(elapsedTime, gs);
            if (this.Weapon.CanFire()) {
                if (this.Weapon.TargetAndFire(gs.Enemies, this.Position, gs.Grid.cellSize, gs)) {
                }
            }
        }
    }
    TypeScriptTD.TowerInstance = TowerInstance;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=TowerInstance.js.map
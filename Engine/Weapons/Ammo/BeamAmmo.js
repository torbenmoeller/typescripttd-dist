var TypeScriptTD;
(function (TypeScriptTD) {
    class BeamAmmo extends TypeScriptTD.Ammo {
        constructor() {
            super(...arguments);
            this.IsAlive = false;
        }
        Update(elapsedTime, data, session) { }
        Reset() {
            this.IsAlive = true;
            this.AliveTime = 0;
        }
    }
    TypeScriptTD.BeamAmmo = BeamAmmo;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=BeamAmmo.js.map
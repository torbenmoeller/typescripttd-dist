var TypeScriptTD;
(function (TypeScriptTD) {
    class TowerData {
        static fromJson(json) {
            var obj = JSON.parse(json);
            var t = new TowerData();
            t.Id = obj["Id"];
            t.WeaponType = obj["WeaponType"];
            t.Level = parseInt(obj["Level"]);
            t.Cost = parseInt(obj["Cost"]);
            t.TimeToBuildMs = parseInt(obj["TimeToBuildMs"]);
            t.TimeToSellMs = parseInt(obj["TimeToSellMs"]);
            t.Damage = parseInt(obj["Damage"]);
            t.ReloadTimeMs = parseInt(obj["ReloadTimeMs"]);
            t.MinRange = parseInt(obj["MinRange"]);
            t.MaxRange = parseInt(obj["MaxRange"]);
            t.Texture = obj["Texture"];
            t.ShotTexture = obj["ShotTexture"];
            t.ShotSpeed = parseInt(obj["ShotSpeed"]);
            t.CanShootFlying = obj["CanShootFlying"] == "false" ? false : true;
            t.CanShootLand = obj["CanShootLand"] == "false" ? false : true;
            t.HitTexture = obj["HitTexture"];
            t.HitAnimationFPS = parseInt(obj["HitAnimationFPS"]);
            t.BuildSoundId = obj["BuildSoundId"];
            t.SellSoundId = obj["SellSoundId"];
            t.UpgradeSoundId = obj["UpgradeSoundId"];
            t.ShotSoundId = obj["ShotSoundId"];
            t.HitSoundId = obj["HitSoundId"];
            return t;
        }
    }
    TypeScriptTD.TowerData = TowerData;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=TowerData.js.map
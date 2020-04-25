var TypeScriptTD;
(function (TypeScriptTD) {
    class EnemyData {
        static fromJson(json) {
            var obj = JSON.parse(json);
            var e = new EnemyData();
            e.Id = obj["Id"];
            e.CanFly = obj["CanFly"] == "false" ? false : true;
            e.Speed = parseFloat(obj["Speed"]);
            e.Health = parseInt(obj["Health"]);
            e.Worth = parseInt(obj["Worth"]);
            e.Texture = obj["Texture"];
            e.DeathSoundId = obj["DeathSoundId"];
            e.SpawnSoundId = obj["SpawnSoundId"];
            return e;
        }
    }
    TypeScriptTD.EnemyData = EnemyData;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=EnemyData.js.map
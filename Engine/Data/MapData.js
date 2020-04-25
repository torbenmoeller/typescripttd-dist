var TypeScriptTD;
(function (TypeScriptTD) {
    class MapData {
        constructor() {
            this.Waves = new Array();
            this.StartX = 0;
            this.StartY = 5;
            this.EndX = 18;
            this.EndY = 5;
        }
        static fromJson(json) {
            var obj = JSON.parse(json);
            var m = new MapData();
            m.MapId = obj["MapId"];
            m.FriendlyName = obj["FriendlyName"];
            m.StartingCash = parseInt(obj["StartingCash"]);
            m.BackgroundTexture = obj["BackgroundTexture"];
            m.NumLives = parseInt(obj["NumLives"]);
            m.FocusColor = obj["FocusColor"];
            m.VictorySoundId = obj["VictorySoundId"];
            m.DefeatSoundId = obj["DefeatSoundId"];
            m.WaveStartSoundId = obj["WaveStartSoundId"];
            m.MapStartSoundId = obj["MapStartSoundId"];
            for (var w in obj["Waves"]) {
                var wave = TypeScriptTD.WaveData.fromJson(JSON.stringify(obj["Waves"][w]));
                m.Waves.push(wave);
            }
            return m;
        }
    }
    TypeScriptTD.MapData = MapData;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=MapData.js.map
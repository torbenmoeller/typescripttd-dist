var TypeScriptTD;
(function (TypeScriptTD) {
    class WaveData {
        constructor() {
            this.WarmUpTime = 10;
            this.Creep = new Array();
        }
        static fromJson(json) {
            var obj = JSON.parse(json);
            var w = new WaveData();
            w.WorthMod = parseInt(obj["WorthMod"]);
            w.HealthMod = parseInt(obj["HealthMod"]);
            if (Object.prototype.toString.call(obj["Creep"]) === '[object Array]') {
                for (var c in obj["Creep"]) {
                    var creep = TypeScriptTD.CreepData.fromJson(JSON.stringify(obj["Creep"][c]));
                    w.Creep.push(creep);
                }
            }
            else {
                var creep = TypeScriptTD.CreepData.fromJson(JSON.stringify(obj["Creep"]));
                w.Creep.push(creep);
            }
            return w;
        }
    }
    TypeScriptTD.WaveData = WaveData;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=WaveData.js.map
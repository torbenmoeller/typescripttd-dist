var TypeScriptTD;
(function (TypeScriptTD) {
    class CreepData {
        static fromJson(json) {
            var obj = JSON.parse(json);
            var c = new CreepData();
            c.CreepId = obj["CreepId"];
            c.Entrance = obj["Entrance"];
            c.Exit = obj["Exit"];
            c.Number = parseInt(obj["Number"]);
            c.TimeBetweenMs = parseInt(obj["TimeBetweenMs"]);
            return c;
        }
    }
    TypeScriptTD.CreepData = CreepData;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=CreepData.js.map
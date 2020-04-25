var TypeScriptTD;
(function (TypeScriptTD) {
    class SpawnRun {
    }
    TypeScriptTD.SpawnRun = SpawnRun;
    class Spawner {
        constructor(gs) {
            this._runs = new Array();
            this.gs = gs;
        }
        update(elapsedtime, session) {
            var numFinished = 0;
            for (var r in this._runs) {
                var run = this._runs[r];
                if (run.NumCreated < run.TotalToMake) {
                    run.TimeToNext -= elapsedtime;
                    if (run.TimeToNext <= 0) {
                        var enemy = new TypeScriptTD.EnemyInstance(session);
                        enemy.Data = run.Data;
                        enemy.Health = enemy.Data.Health * run.HealthMod;
                        enemy.Stage = TypeScriptTD.PathStage.GoingToStart;
                        //enemy.escaped = false;
                        enemy.Position = run.SpawnPoint;
                        enemy.DestX = run.DestX;
                        enemy.DestY = run.DestY;
                        enemy.StartPoint = run.StartPoint;
                        enemy.StartX = run.StartX;
                        enemy.StartY = run.StartY;
                        enemy.DespawnPoint = run.DespawnPoint;
                        var img = this.gs.game.add.sprite(enemy.Position.x, enemy.Position.y, enemy.Data.Texture);
                        img.anchor.set(0.5, 0.5);
                        enemy.Sprite = img;
                        session.Enemies.push(enemy);
                        //Audio.PlaySfx(enemy.Data.SpawnSoundId);
                        run.NumCreated++;
                        run.TimeToNext = run.TimeBetween;
                    }
                }
                else {
                    numFinished++;
                }
            }
            if (numFinished >= this._runs.length) {
                this.IsSpawning = false;
                this._runs = new Array();
            }
        }
        Start(currentWave, session) {
            // build a list of spawnruns with timetonext set to the start offset
            for (var w in currentWave.Creep) {
                var wp = currentWave.Creep[w];
                var run = new SpawnRun();
                run.Data = TypeScriptTD.EnemyData.fromJson(this.gs.cache.getText(wp.CreepId + "data").toString());
                run.HealthMod = currentWave.HealthMod;
                run.NumCreated = 0;
                run.TimeToNext = currentWave.WarmUpTime;
                run.TotalToMake = wp.Number;
                run.TimeBetween = wp.TimeBetweenMs / 1000;
                run.DestX = session.Map.EndX;
                run.DestY = session.Map.EndY;
                run.StartX = session.Map.StartX;
                run.StartY = session.Map.StartY;
                run.StartPoint = session.Grid.getCellCenter(run.StartX, run.StartY);
                run.SpawnPoint = run.StartPoint.subtract(new TypeScriptTD.Vector2(session.Grid.cellSize * 3, 0));
                run.DespawnPoint = session.Grid.getCellCenter(run.DestX, run.DestY);
                run.DespawnPoint.x = 800 + session.Grid.cellSize;
                this._runs.push(run);
            }
            this.IsSpawning = true;
        }
    }
    TypeScriptTD.Spawner = Spawner;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=Spawner.js.map
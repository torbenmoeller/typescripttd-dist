var TypeScriptTD;
(function (TypeScriptTD) {
    var PathStage;
    (function (PathStage) {
        PathStage[PathStage["GoingToStart"] = 0] = "GoingToStart";
        PathStage[PathStage["GoingToDest"] = 1] = "GoingToDest";
        PathStage[PathStage["GoingToDespawn"] = 2] = "GoingToDespawn";
    })(PathStage = TypeScriptTD.PathStage || (TypeScriptTD.PathStage = {}));
    class EnemyInstance {
        constructor(gs) {
            this.Stage = PathStage.GoingToStart;
            this.Escaped = false;
            this.gs = gs;
        }
        update(elapsedtime) {
            var targetPoint;
            //getTarget
            switch (this.Stage) {
                case PathStage.GoingToStart:
                    targetPoint = this.StartPoint;
                    break;
                case PathStage.GoingToDest:
                    if (this.Path.PathFound && this.Path.Nodes.length > 0) {
                        targetPoint = this.gs.Grid.getCellCenter(this.Path.Nodes[0].Cell.X, this.Path.Nodes[0].Cell.Y);
                    }
                    else {
                        targetPoint = this.Position;
                    }
                    break;
                case PathStage.GoingToDespawn:
                    targetPoint = this.DespawnPoint;
                    break;
            }
            //Movement
            this.CurrentDirection = targetPoint.subtract(this.Position);
            this.CurrentDirection = this.CurrentDirection.normalize();
            var movement = this.CurrentDirection.multiply(this.Data.Speed * this.gs.Grid.cellSize * elapsedtime);
            this.Position = this.Position.add(movement);
            this.Sprite.x = this.Position.x;
            this.Sprite.y = this.Position.y;
            this.Sprite.bringToTop();
            //updateTargetIfReachedDestination
            if (targetPoint.subtract(this.Position).getLengthSquared() <= this.gs.Grid.cellSize) {
                switch (this.Stage) {
                    case PathStage.GoingToStart:
                        this.Stage = PathStage.GoingToDest;
                        this.Path = this.gs.Paths.GetPath(this.gs.Grid.getCell(this.StartX, this.StartY), this.gs.Grid.getCell(this.DestX, this.DestY), this.Data.CanFly);
                        break;
                    case PathStage.GoingToDest:
                        if (this.Path.PathFound && this.Path.Nodes.length > 0) {
                            if (this.Path.Nodes.length == 1) {
                                this.Stage = PathStage.GoingToDespawn;
                                this.gs.Paths.ReleasePath(this.Path);
                            }
                            else {
                                this.Path.CompleteNode(this.Path.Nodes[0]);
                            }
                        }
                        break;
                    case PathStage.GoingToDespawn:
                        //Escaped
                        //Health = 0;
                        this.Escaped = true;
                        break;
                }
            }
        }
        TakeDamage(towerFullName, damage) {
            this.Health -= damage;
        }
    }
    TypeScriptTD.EnemyInstance = EnemyInstance;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=EnemyInstance.js.map
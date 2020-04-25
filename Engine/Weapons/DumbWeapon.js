var TypeScriptTD;
(function (TypeScriptTD) {
    class DumbWeapon {
        constructor() {
            this._sinceLastShot = 0;
            this._projectiles = new Array();
        }
        CanFire() {
            return this._sinceLastShot >= this.TowerData.ReloadTimeMs;
        }
        TargetAndFire(enemies, towerPos, gridCellSize, session) {
            var closest;
            var distSq = 2147483647;
            var maxRange = gridCellSize * this.TowerData.MaxRange;
            maxRange *= maxRange;
            var minRange = gridCellSize * this.TowerData.MinRange;
            minRange *= minRange;
            for (var e in enemies) {
                if ((this.TowerData.CanShootFlying && enemies[e].Data.CanFly) || (this.TowerData.CanShootLand && !enemies[e].Data.CanFly)) {
                    var d = (enemies[e].Position.subtract(towerPos)).getLengthSquared();
                    if (d < distSq && d <= maxRange && d >= minRange) {
                        closest = enemies[e];
                        distSq = d;
                    }
                }
            }
            if (closest != null) {
                var item = new TypeScriptTD.DumbAmmo(session, this.ShotTexture);
                item.IsAlive = true;
                item.IsHit = false;
                item.DistanceTravelled = 0;
                item.Position = towerPos.add(new TypeScriptTD.Vector2(gridCellSize / 2, gridCellSize / 2));
                item.Speed = this.TowerData.ShotSpeed * gridCellSize;
                item.Direction = closest.CurrentDirection.multiply(closest.Data.Speed * gridCellSize);
                item.Direction = item.Direction.add(closest.Position).subtract(item.Position).divide(item.Speed);
                item.Direction = item.Direction.normalize();
                var rot = Math.atan2(item.Direction.y, item.Direction.x);
                item.sprite.rotation = rot + Math.PI * 0.5;
                this._projectiles.push(item);
                this._sinceLastShot = 0;
                return true;
            }
            return false;
        }
        Update(elapsedTime, session) {
            this._sinceLastShot += elapsedTime * 1000;
            for (var projectile in this._projectiles) {
                this._projectiles[projectile].Update(elapsedTime, this.TowerData, session);
            }
            for (var i = this._projectiles.length - 1; i >= 0; i--) {
                var item = this._projectiles[i];
                if (!item.IsAlive) {
                    item.sprite.parent.removeChild(item.sprite);
                    this._projectiles.splice(i, 1);
                }
            }
        }
    }
    TypeScriptTD.DumbWeapon = DumbWeapon;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=DumbWeapon.js.map
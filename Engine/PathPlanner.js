var TypeScriptTD;
(function (TypeScriptTD) {
    class Path {
        constructor() {
            this.Nodes = new Array();
            this._firstRun = true;
        }
        ClearData() {
            this.Nodes = new Array();
            this.End = null;
            this.IsAirPath = false;
            this._firstRun = true;
            this.PathFound = false;
        }
        CompleteNode(node) {
            if (!this.IsAirPath) {
                this.Nodes.splice(this.Nodes.indexOf(node), 1);
                this.CurrentCell = node.Cell;
            }
        }
        IsPathValid() {
            if (this._firstRun) {
                this._firstRun = false;
                return false;
            }
            if (this.IsAirPath)
                return true;
            if (!this.PathFound)
                return false;
            for (var t in this.Nodes) {
                var v = this.Nodes[t].Cell.buildable;
                if (v == false)
                    return false;
            }
            return true;
        }
    }
    TypeScriptTD.Path = Path;
    class PathNode {
        constructor() {
            // N, S, E, W
            this.Adjacent = new Array();
        }
        TotalCost() {
            return this.CostFromStart + this.CostToGoal;
        }
        EstimateCostTo(toCell) {
            return Math.abs(toCell.X - this.Cell.X) + Math.abs(toCell.Y - this.Cell.Y);
        }
        CompareTo(other) {
            return this.TotalCost() > other.TotalCost();
        }
    }
    TypeScriptTD.PathNode = PathNode;
    class PathPlanner {
        constructor() {
            this._allocatedPaths = new Array();
            this.columnsize = 0;
        }
        InitNodes(cells) {
            //own impl
            this.columnsize = cells.Columns;
            //
            this._nodeGrid = new Array(cells.Rows * cells.Columns);
            for (var gridCell in cells.CellsArray) {
                var p = new PathNode();
                this._nodeGrid[cells.CellsArray[gridCell].Y * cells.Columns + cells.CellsArray[gridCell].X] = p;
                p.Cell = cells.CellsArray[gridCell];
            }
            for (var node in this._nodeGrid) {
                this._nodeGrid[node].Adjacent[0] = this._nodeGrid[node].Cell.Y > 0
                    ? this._nodeGrid[(this._nodeGrid[node].Cell.Y - 1) * cells.Columns + this._nodeGrid[node].Cell.X]
                    : null;
                this._nodeGrid[node].Adjacent[1] = this._nodeGrid[node].Cell.Y < (cells.Rows - 1)
                    ? this._nodeGrid[(this._nodeGrid[node].Cell.Y + 1) * cells.Columns + this._nodeGrid[node].Cell.X]
                    : null;
                this._nodeGrid[node].Adjacent[2] = this._nodeGrid[node].Cell.X < (cells.Columns - 1)
                    ? this._nodeGrid[this._nodeGrid[node].Cell.Y * cells.Columns + this._nodeGrid[node].Cell.X + 1]
                    : null;
                this._nodeGrid[node].Adjacent[3] = this._nodeGrid[node].Cell.X > 0
                    ? this._nodeGrid[this._nodeGrid[node].Cell.Y * cells.Columns + this._nodeGrid[node].Cell.X - 1]
                    : null;
            }
        }
        PathExist(start, end) {
            var p = new Path();
            p.ClearData();
            p.End = end;
            p.CurrentCell = start;
            return this.CalculateLandPath(p);
        }
        GetPath(start, end, isAirPath) {
            var p = new Path();
            p.ClearData();
            p.End = end;
            p.IsAirPath = isAirPath;
            p.CurrentCell = start;
            this._allocatedPaths.push(p);
            return p;
        }
        ReleasePath(p) {
            this._allocatedPaths.splice(this._allocatedPaths.indexOf(p), 1);
        }
        UpdatePaths() {
            for (var i = 0; i < this._allocatedPaths.length; i++) {
                var p = this._allocatedPaths[i];
                if (!p.IsPathValid()) {
                    if (p.IsAirPath) {
                        p.Nodes = new Array();
                        p.Nodes.push(this._nodeGrid[this.columnsize * p.End.Y + p.End.X]);
                        p.PathFound = true;
                    }
                    else {
                        this.CalculateLandPath(p);
                    }
                }
            }
        }
        CalculateLandPath(p) {
            var _open = new Array();
            var _closed = new Array();
            p.Nodes = new Array();
            var startNode = this._nodeGrid[p.CurrentCell.Y * this.columnsize + p.CurrentCell.X];
            startNode.CostFromStart = 0;
            startNode.CostToGoal = startNode.EstimateCostTo(p.End);
            startNode.Parent = null;
            _open.push(startNode);
            while (_open.length > 0) {
                // Simulate "popping" from _open
                var node = _open[0];
                _open.splice(0, 1);
                if (node.Cell.X == p.End.X && node.Cell.Y == p.End.Y) {
                    var n = node;
                    while (n != startNode) {
                        p.Nodes.splice(0, 0, n);
                        n = n.Parent;
                    }
                    p.PathFound = true;
                    return true;
                }
                for (var i = 0; i < 4; i++) {
                    var adjacent = node.Adjacent[i];
                    if (adjacent != null && adjacent.Cell.buildable) {
                        var newCost = node.CostFromStart + adjacent.EstimateCostTo(node.Cell);
                        var isInOpen = contains(_open, adjacent);
                        var isInClosed = contains(_closed, adjacent);
                        if ((isInOpen || isInClosed) && adjacent.CostFromStart <= newCost) {
                            continue;
                        }
                        adjacent.Parent = node;
                        adjacent.CostFromStart = newCost;
                        adjacent.CostToGoal = adjacent.EstimateCostTo(p.End);
                        if (isInClosed) {
                            _closed.splice(_closed.indexOf(adjacent), 1);
                        }
                        if (isInOpen) {
                            _open.sort();
                        }
                        else {
                            _open.push(adjacent);
                        }
                    }
                }
                _closed.push(node);
            }
            p.PathFound = false;
            return false;
        }
    }
    TypeScriptTD.PathPlanner = PathPlanner;
    function contains(arr, obj) {
        var i = arr.length;
        while (i--) {
            if (arr[i] === obj) {
                return true;
            }
        }
        return false;
    }
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=PathPlanner.js.map
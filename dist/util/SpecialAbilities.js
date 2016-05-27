"use strict";
var SpecialAbilities = (function () {
    function SpecialAbilities(abilities) {
        if (abilities === void 0) { abilities = []; }
        this.abilities = abilities;
    }
    SpecialAbilities.prototype.has = function (key) {
        return this.abilities.indexOf(key) != -1;
    };
    SpecialAbilities.prototype.remove = function (key) {
        this.abilities = this.abilities.filter(function (el) { return el != key; });
    };
    SpecialAbilities.prototype.add = function (key) {
        this.abilities = this.abilities.concat([key]);
    };
    SpecialAbilities.prototype.reset = function () {
        this.abilities = [];
    };
    SpecialAbilities.prototype.toggle = function (key) {
        if (this.has(key)) {
            this.remove(key);
        }
        else {
            this.add(key);
        }
    };
    return SpecialAbilities;
}());
exports.SpecialAbilities = SpecialAbilities;
//# sourceMappingURL=SpecialAbilities.js.map
"use strict";
exports.__esModule = true;
exports.identityOf = void 0;
var fantasy_land_1 = require("fantasy-land");
// eslint-disable-next-line no-use-before-define
function identityOf(v) {
    // eslint-disable-next-line no-use-before-define
    return new Identity(v);
}
exports.identityOf = identityOf;
var Identity = /** @class */ (function () {
    function Identity(v) {
        this.v = v;
    }
    Identity.prototype[(_a = fantasy_land_1.of, fantasy_land_1.map)] = function (f) {
        return identityOf(f(this.v));
    };
    Identity.prototype[fantasy_land_1.ap] = function (b) {
        return identityOf(b.v(this.v));
    };
    Identity.prototype[fantasy_land_1.chain] = function (f) {
        return f(this.v);
    };
    Identity.prototype[fantasy_land_1.extend] = function (f) {
        return identityOf(f(this));
    };
    Identity.prototype[fantasy_land_1.extract] = function () {
        return this.v;
    };
    Identity.prototype.toString = function () {
        return "Identity[" + this.v + "]";
    };
    var _a;
    Identity[_a] = identityOf;
    return Identity;
}());
exports["default"] = Identity;

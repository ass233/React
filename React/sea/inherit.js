/**
 * Created by 北狼 on 2016/10/6.
 */
define(function (require,exports,module) {
    module.exports = {
        Function.prototype.inherit = function (baseClass) {
        for (var p in baseClass.prototype){
            this.prototype[p] = baseClass.prototype[p];
        }
    }
    };
});
/**
 * Created by 北狼 on 2016/10/22.
 */
define(function(require,exports,module){
    var inherit=require('inherit.js');
    exports.abc=function(){
        function class1() {

        }

        class1.prototype = {
            p1:"p1",
            method1:function () {
                alert("from class1 method1");
            }
        }

        function class2() {

        }

        //class2.prototype = class1.prototype;

        /* for (var p in class1.prototype){
         class2.prototype[p] = class1.prototype[p];
         }*/
        class2.inherit(class1);

        class2.prototype.p2 = "p2";
        class2.prototype.method1 = function () {
            alert("from class2 method1");
        }
        class2.prototype.method2 = function () {
            alert("method2");
        }

        var cls1 = new class1();
        alert(cls1.p1);
        cls1.method1();


        var cls2 = new class2();
        alert(cls2.p1);
        alert(cls2.p2);
        cls2.method1();
        cls2.method2();

    };
});
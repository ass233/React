/**
 * Created by 北狼 on 2016/10/7.
 */
define(function () {
    return{
        var Employee = Class.create();
    Employee.prototype = Object.extend(new Person(),{
        initialize:function () { },
        /*corpName:"微软",*/
        showInfo:function () {
            return this.personName+","+this.personAge+","+this.corpName+","+this.personJob;
        }
    });
    }
});
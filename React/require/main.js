/**
 * Created by 北狼 on 2016/10/22.
 */
/*
require.config({
    paths:{
        prototype:'prototype.js',
        Employee:'Employee.js',
        Person:'Person.js'
    }
})*/
/*require(['prototype','Employee','Person'],function (prototype,Employee,Person){
    function getEmployeeInfo() {
        var employee = new Employee();
        employee.personName = "wangwu";
        employee.personAge = 28;
        employee.corpName = "Google";

        var info = employee.showInfo();
        alert(info);

    }
});*/
require.config({
    paths:{
        prototype:'prototype.js',
        Employee:'Employee.js',
        Person:'Person.js'
    }
})
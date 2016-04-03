/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Date.prototype.getMonthName = function () {
    var month = ['январь', 'февраль', 'март',
        'май', 'апрель', 'июнь',
        'июль', 'август', 'сентябрь',
        'октябрь', 'ноябрь', 'декабрь'];
    return month[this.getMonth()];
};
Date.prototype.getDayName = function () {
    var day = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    return day[this.getDay()];
};

function printDate() {
    var today = new Date();
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    return(today.toLocaleString("ru", options));
}
function task2() {
    var today = new Date();
    var sept1 = new Date("9/01/" + today.getFullYear());
    var days = Math.round(((sept1 - today) / 86400000), 0);
    if (days > 0)
        alert(days);
    else
    if (days == 0)
        alert("Сегодня первое сентября");
    else
        alert("Первое сентября уже прошло");
}
function task4(){
   var str = document.getElementById("date").value;
   var re = new RegExp(" ",'g');
   alert(str.replace(re, ''));
}

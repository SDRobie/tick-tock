function clock() {

var currentdate = new Date();
var datetime =  + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();

console.log(datetime);
}
var timeOutID = setTimeout(function() {clock()});
var intervalID = setInterval(function() {clock()}, 60000);

console.log(clock());

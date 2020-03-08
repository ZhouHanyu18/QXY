function runClock(){
    var together = new Date();
    together.setFullYear(2019, 11, 20);      //时间年月日
    together.setHours(16);            //小时
    together.setMinutes(53);          //分钟
    together.setSeconds(0);         //秒前一位
    together.setMilliseconds(2);        //秒第二位

    $("#clock-box").fadeIn(500);
    while (true) {
        timeElapse(together);
        $await(Jscex.Async.sleep(1000));
    }
}

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "这是我们认识的  第<span class=\"digit\">" + days + "</span> 天<span class=\"digit\">" + hours + "</span> 小时<span class=\"digit\">" + minutes + "</span> 分钟<span class=\"digit\">" + seconds + "</span> 秒";
	$("#clock").html(result);
}
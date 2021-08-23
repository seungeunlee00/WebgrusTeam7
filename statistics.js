temp = location.href.split("?");
mbti = temp[1];

const myMbti = document.getElementById("mbti");
myMbti.innerText = mbti;

const job1 = document.getElementById("job1");
job1.innerText = "job1";

const job2 = document.getElementById("job2");
job2.innerText = "job2";

const per1 = document.getElementById("%1");
per1.innerText = "%1";

const per2 = document.getElementById("%2");
per2.innerText = "%2";

function copy() {
	var url = "http://118.67.133.92/start/start.html";
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("URL이 복사되었습니다.");
}

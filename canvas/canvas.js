var col = "black";
var siz = 8;
var can = document.getElementById("can");
var ctx = can.getContext("2d");

function clear() {
	ctx.clearRect(0, 0, 800, 500);
}

document.body.onkeyup = function(e){
    var key = e.keyCode;
	if(key == 66) {
		col = "blue";
	}
	else if(key == 71) {
		col = "green";
	}
	else if(key == 82) {
		col = "red";
	}
	else if(key == 89) {
		col = "yellow";
	}
	else if(key == 38) {
		if(siz < 128) {
			siz += 4;
		}
	}
	else if(key == 40) {
		if(siz > 4) {
			siz -= 4;
		}
	}
	else if(key == 32) {
		clear();
	}
}

function draw(event) {
    var pos = mouse(event);
    ctx.beginPath();
	ctx.arc(pos.x,pos.y,siz,0,2*Math.PI);
	ctx.fillStyle = col;
    ctx.fill();
    ctx.lineWidth = 0;
	ctx.strokeStyle = col;
	ctx.stroke();
}

function mouse(e) {
	var dif = can.getBoundingClientRect();
	return {
		x: e.clientX - dif.left,
		y: e.clientY - dif.top
	};
}


(() => {
 // ctr
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
		var x = 0;
		var y = 0; // screen starting point
		var next = 1;
		var h = .360;
		var prev = 0;
		ctx.beginPath();
		ctx.moveTo(500 + x , 500 + y);
		for (var i = 0; i <= 100; i++)
		{
			if (next == prev)
			{
				next -= i * h;
			}
			else
			{
				next += prev;
				prev = next;
				x = prev;
				y = x;
				origin = next;
			}
				 // set line stroke and line width
				ctx.strokeStyle = '#00FFAE';
				ctx.lineWidth = 2;
			
				 // draw a line
			// x, y check
			ctx.quadraticCurveTo(i % ctx.arc(660+x, 300+y, i*i, i, i), 0, x, y);
			// change x,y using Lerp
			ctx.stroke();
		}
})();
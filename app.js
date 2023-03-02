
(() => {
 // ctr
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
		var x = 0;
		var y = 0; // screen starting point
		var next = 1;
		var h = .33333333367;
		var prev = 0;
		ctx.beginPath();
		ctx.moveTo(550+x , 400 + y);
		for (var i = 0; i <= 70; i++)
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
			ctx.quadraticCurveTo(i % ctx.arc(x+560, y+390, i*10, i, i), y, x, y);
			// change x,y using Lerp
			ctx.stroke();
		}
})();
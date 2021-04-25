var maxSize=0;
function fUp() {
	var x = document.querySelectorAll("p,h1,a,label,button,select,h2");
	var i;
	maxSize++;
	if (maxSize>2){
		alert("Maximum Size Reached")
	}else{
		for (i = 0; i < x.length; i++) {
			var style = window.getComputedStyle(x[i], null).getPropertyValue('font-size');
			var fontSize = parseFloat(style);
			x[i].style.fontSize = (fontSize + 1) + 'px';
		} 
	}
}function fDown() {
	var x = document.querySelectorAll("p,h1,a,label,button,select,h2");
	var i;
	maxSize--;
	if (maxSize<-2){
		alert("Minimum Size Reached")
	}else{
		for (i = 0; i < x.length; i++) {
			var style = window.getComputedStyle(x[i], null).getPropertyValue('font-size');
			var fontSize = parseFloat(style);
			x[i].style.fontSize = (fontSize - 1) + 'px';
		} 
	}
}
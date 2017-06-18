/*
	Use a group of elements with the id and the scale factor like so:

	const elements = [
		{ e: '#headerBar', s: 18 },
		{ e: '#mainBox', s: 12 }
	];
	jtr(elements);

*/

var r = (e, s) => {
	var ww = $(window).width();
	var wh = $(window).height();
	if(ww<=wh) $(e).css('font-size', (s * .005*wh * ww/wh));
	else $(e).css('font-size', (s * .005*wh * wh/ww));
}

var jtr = (els) => {
	els.forEach((el) => {
		$(window)
			.on('load', () => {r(el.e, el.s)})
			.on('resize', () => {r(el.e, el.s)})
			.on('maximize', () => {r(el.e, el.s)})
			.on('unmaximize', () => {r(el.e, el.s)})
	});
}

if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = jtr;
  }
  exports.jtr = jtr;
} else {
  root['jtr'] = jtr;
}

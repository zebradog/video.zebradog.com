$(function(){
	const parser = document.createElement('a');
	parser.href = window.location.href;

	const pathname = parser.pathname;

	const id = Number(pathname.substring(pathname.lastIndexOf('/') + 1)),
	      isValid = id && !isNaN(id);

	if (isValid) {
		$('#video').html('<iframe src="https://player.vimeo.com/video/'+id+'?byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1" width="1280" height="720" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		$.getJSON('https://vimeo.com/api/v2/video/'+id+'.json?callback=?',function(v){
			if(v[0]){
				var title = v[0]['title'];
				$('#title').text(title);
				document.title = 'ZEBRADOG: '+title;
			}else{
				$('#title').text('');
				document.title = 'ZEBRADOG';
			}
		});
	} else {
		document.title = 'ZEBRADOG';
		$('#title').text('Please specify a video.');
	}

	let year = new Date().getFullYear() + '';
	document.getElementById('copyright-date').innerHTML = year;
});

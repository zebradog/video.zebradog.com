$(function(){
	var id = document.location.toString().substr(document.location.toString().lastIndexOf("/")+1);
	if((parseFloat(id) == parseInt(id)) && !isNaN(id)){
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
	}else{
		document.title = 'ZEBRADOG';
		$('#title').text('Please specify a video.');
	}
});

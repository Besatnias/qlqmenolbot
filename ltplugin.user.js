$(document).ready(function(){
	var $songLink = $('li.song-node-info-album').find('a').attr("href");
	var $tabs = $('ul.tabs');
	$.ajax({
		type: 'GET',
		url: $songLink,
		success: function(res){
		    $(res).find('.green_tab').each(function(){
		        $tabs.append($(this));
		    });
		}
	});
});

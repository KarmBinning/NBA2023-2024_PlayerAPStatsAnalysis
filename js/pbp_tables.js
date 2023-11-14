function replaceLogoWithTeamChars(){
	var teams = getTeam();

	$('.playByPlay__logo ').each(function(i){
		var imgSrc = $('img').attr('src');

		for (var x=0;x<teams.length;x++)
			if (teams[x]['url'] == imgSrc)
				$(this).html(teams[x]['name']);
	});	
}

function addNumCharsToTime(){
	$('.playByPlay__time').each(function(i) {
		time = $(this).text();
		if (time.includes("."))
		{
			time = "00:" + time;
			$(this).text(time);
		}
	});
}

function removeTableExtraTableHeaders(){
	
	var count = 1;
	$('.Table__THEAD').each( function(i){
		if (count > 1){
			$(this).remove();
		}
		count = count + 1;
	});
}

function addHeaderColumns(){
	var html_th = '<tr class="Table__TR Table__even"><th title="" class="Table__TH">TIME</th>'
		+ '<th title="" class="tl Table__TH">TEAM</th><th title="" class="tl Table__TH">PLAY</th><th title="" class="Table__TH">AWAY</th><th title="" class="Table__TH">HOME</th></tr>';
		
	$('.Table__THEAD').html(html_th);
}

$(document).ready(function(){
	
	replaceLogoWithTeamChars();
	addNumCharsToTime();

	removeTableExtraTableHeaders();
	addHeaderColumns();
});
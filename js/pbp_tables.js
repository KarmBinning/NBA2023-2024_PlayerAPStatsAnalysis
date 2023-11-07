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
	$('th').each( function(i){
		
		if (count > 4){
			$(this).html(' ');
			
		}
		count = count + 1;
	});
}

function renameHeaderToAway(){
	var count = 1;
	$('th').each(function(i){
		if (count == 3)
			$(this).text('AWAY');
		
		count++;
	});
}
function renameHeaderToHome(){
	var count = 1;
	$('th').each(function(i){
		if (count == 4)
			$(this).text('HOME');
		
		count++;
	});
}

$(document).ready(function(){
	
	replaceLogoWithTeamChars();
	addNumCharsToTime();
	removeTableExtraTableHeaders();

	renameHeaderToHome();
	renameHeaderToAway();
	
});
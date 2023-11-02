//C:\test\nba\js
// NBA2023-2024_PlayerAPStatsAnalysis: 

var homeTeam = 'TOR', awayTeam = 'MIN';

function replaceLogoWithTeamChars(){
	var teams = getTeam();

	$('.playByPlay__logo ').each(function(i){
		var imgSrc = $('img').attr('src');

		for (var x=0;x<teams.length;x++)
			if (teams[x]['url'] == imgSrc)
				$(this).html(teams[x]['name']);
	});	
}

function getTeam(){
	var teams = [
		{
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/tor.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "TOR"
		},
		{
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/min.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "MIN"
		},
		{
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/mil.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "MIL"
		}
	];

	return teams;
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

$(document).ready(function(){
	
	replaceLogoWithTeamChars();
	addNumCharsToTime();
	removeTableExtraTableHeaders();
	
});
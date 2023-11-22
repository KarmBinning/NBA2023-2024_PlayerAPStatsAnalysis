/*	
*	CREATED BY:				karmbinning
*	CREATED DATE:			2023/11/14
*	LAST MODIFIED BY:		karmbinning
*	LAST MODIFIED DATE:		2023/11/22

*	DESCRIPTION:			Create and get JSON-format of Category Actions.
									ID 				=	Unique Identification
									Description_	=	The category of the action
									AP					=	Action Points of category action
*/


function getCategoryActions(){
	var categoryActions = [
        {
			id: 1,
			description_: "Makes two-point Field Goal",
			ap: 1.0
		},
        {
			id: 2,
			description_: "Misses any kind of Field Goal",
			ap: 1.0
		},
        {
			id: 3,
			description_: "Makes Free Throw",
			ap: 1.0
		},
        {
			id: 4,
			description_: "Misses Free Throw",
			ap: 1.0
		},
        {
			id: 5,
			description_: "Rebound",
			ap: 1.0
		},
        {
			id: 6,
			description_: "Assist",
			ap: 1.0
		},
        
		{
			id: 7,
			description_: "Foul",
			ap: 1.0
		},
        {
			id: 8,
			description_: "Draw Foul",
			ap: 1.0
		},
        {
			id: 9,
			description_: "Turnover",
			ap: 1.0
		},
        {
			id: 10,
			description_: "Steal",
			ap: 1.0
		},
        {
			id: 11,
			description_: "Substitution",
			ap: 1.0
		},
        {
			id: 12,
			description_: "Jump ball",
			ap: 1.0
		},
		
		{
			id: 13,
			description_: "Block",
			ap: 1.0
		},
        {
			id: 14,
			description_: "Others",
			ap: 1.0
		},
        {
			id: 15,
			description_: "Ejection",
			ap: 1.0
		},
        {
			id: 16,
			description_: "makes three-point field goal",
			ap: 1.0
		}
		
	];

	return categoryActions;
}

function getEachTeamsPlay(team){
	var _gamePlayId = 0,
		gamePlayIds = [],
		pbp = [];
	$('.playByPlay__logo').each(function(i){
		_gamePlayId++;

		if ($(this).text() == team)
		{
			$(this).parent().find('.playByPlay__text').each(function(j){
				pbp.push($(this).text());

				gamePlayIds.push(_gamePlayId);
			});
		}
	});
	
	replaceFullNameWithPlaceholder(gamePlayIds, pbp);
}

function replaceFullNameWithPlaceholder(_gamePlayId, pbp){
	var plays = [],
		playByPlays = [],
		players = getPlayersFullName();
	
	for (var i=0; i<pbp.length; i++)
	{
		for (var p=0; p<players.length; p++)
		{
			if ( pbp[i].includes(players[p]) )
			{
				var playerUpperCaseFullName = players[p].toUpperCase();
				pbp[i] = pbp[i].replace(players[p], playerUpperCaseFullName);
				
				playByPlays[i] =
				{
					Id: _gamePlayId[i],
					Play: pbp[i]
				};
			}
		}
	}
	log(playByPlays);
}
function getPlayersFullName(){
	var playersFullName = [];
	var players = getPlayersList();
	$(players).each(function(p){
		playersFullName.push(this[0]);
	});
	
	return playersFullName;
}

function getGameId(){
	var meta_gameId = document.head.querySelector("[property~=game_id][content]").content;
	log('GAME ID: ' + meta_gameId);
}

$(document).ready(function(){
	getEachTeamsPlay('TOR');
	getGameId();
});
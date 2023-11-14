/*	
*	CREATED BY:				karmbinning
*	CREATED DATE:			2023/11/14
*	LAST MODIFIED BY:		karmbinning
*	LAST MODIFIED DATE:	2023/11/14

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
	$('.playByPlay__logo').each(function(i){
		if ($(this).text() == team)
		{
			$(this).parent().find('.playByPlay__text').each(function(j){
				var pbp = $(this).text();
				log(pbp);
			});
		}
	});
}

$(document).ready(function(){
	
	getEachTeamsPlay('TOR');
	
});
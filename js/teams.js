function getTeam(){
	var teams = [
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/atl.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "ATL"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/bos.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "BOS"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/bkn.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "BKN"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/cha.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "CHA"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/chi.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "CHI"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/cle.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "CLE"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/dal.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "DAL"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/den.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "DEN"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/det.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "DET"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/gsw.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "GSW"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/hou.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "HOU"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/ind.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "IND"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/lac.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "LAC"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/lal.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "LAL"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/mem.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "MEM"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/mia.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "MIA"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/mil.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "MIL"
		},
		{
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/min.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "MIN"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/nop.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "NOP"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/ny.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "NY"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/orl.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "ORL"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/okc.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "OKC"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/phi.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "PHI"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/phx.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "PHX"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/por.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "POR"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/sac.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "SAC"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/sa.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "SA"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/tor.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "TOR"
		},
        {
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/uta.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			name: "UTA"
		},
		{
			url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/wsh.png&scale=crop&cquality=40&location=origin&w=40&h=40",
			//url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/wsh.png&amp;scale=crop&amp;cquality=40&amp;location=origin&amp;w=40&amp;h=40",
			name: "WSH"
		}        
	];

	return teams;//
}
const summonerName = "alvinl";

const url = `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-1b5d23be-b04f-4d16-9889-bb48cf375f36`;

function getData(summonerName, url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let puuid = data.puuid;
      let url2 = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=RGAPI-1b5d23be-b04f-4d16-9889-bb48cf375f36`;

      fetch(url2)
        .then(response => response.json())
        .then(data => {
          const matches = data;
          for (i of matches) {
            urlMatch = `https://americas.api.riotgames.com/lol/match/v5/matches/${i}?api_key=RGAPI-1b5d23be-b04f-4d16-9889-bb48cf375f36`;

            fetch(urlMatch)
              .then(response => response.json())
              .then(data => {
                let matchData = data;

                for (let i = 0; i < 10; i++) {
                  let playerName = matchData.info.participants[i].summonerName;
                  if (playerName === "Alvin L") {
                    console.log(matchData.info.participants[i].championName);
                  }
                }
              })
              .catch(err => {
                console.log("Erro no fetch do match: " + err);
              });
          }
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
}

getData(summonerName, url);

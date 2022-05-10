const addEnglishMatches = document.querySelector(".english-matches");
const addSpanishMatches = document.querySelector(".spanish-matches");

function displayMatches(singleMatch, countryMatches) {
  countryMatches.innerHTML += `
    <div class="match-section">
        <div class = "match-team">
            <div class = "team-logo">
                <img src="${singleMatch.teams.home.logo}">
            </div>
            <div class = "team-name">${singleMatch.teams.home.name}</div>
            <div class = "team-score">${singleMatch.score.fulltime.home}</div>
        </div>

        <div class = "match-team">
            <div class = "team-logo">
                <img src="${singleMatch.teams.away.logo}">
            </div>
            <div class = "team-name">${singleMatch.teams.away.name}</div>
            <div class = "team-score">${singleMatch.score.fulltime.away}</div>
        </div>
    </div>`;
}

async function getMatches(link, addMatches) {
  const matches = await fetch(link, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "d577cf053emsh1b8a8b8d46e7f2dp15155cjsn8e5804a2c58a",
    },
  });
  if (matches.status > 400) {
    console.log("There was an error");
  } else {
    const data = await matches.json();
    // console.log(data);
    const matchList = data.response;
    console.log(matchList);
    matchList.forEach((singleMatch) => displayMatches(singleMatch, addMatches));
  }
}

getMatches(
  "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2020&last=6",
  addEnglishMatches
);

getMatches(
  "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=140&season=2020&last=4",
  addSpanishMatches
);

const addEnglishTeams = document.querySelector(".english-teams");
const addSpanishTeams = document.querySelector(".spanish-teams");
const addRomanianTeams = document.querySelector(".romanian-teams");

const showEnglishTeams = document.querySelector("#english");
const showSpanishTeams = document.querySelector("#spanish");
const showRomanianTeams = document.querySelector("#romanian");

const searchInput = document.querySelector("[data-search]");

const teamName = document.getElementsByClassName("single-team-name");

search.addEventListener("input", () => {
  Array.from(teamName).forEach((el) => {
    console.log(typeof el.parentElement.parentElement.style.display);

    if (el.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      el.parentElement.parentElement.style.display = "block";
    } else {
      el.parentElement.parentElement.style.display = "none";
    }
  });
});

function displayTeams(singleTeam, addTeam) {
  addTeam.innerHTML += `
    <div class = "single-team-box">
        <a href="#" class="team-link">
            <div class = "single-team-emblem">
                <img src = "${singleTeam.team.logo}">
            </div>
            <div class = "single-team-name">Name: "${singleTeam.team.name}"</div>
            <div class = "single-team-city">City: "${singleTeam.venue.city}"</div>
        </a>
    </div>`;
}

async function getTeams(link, addTeam) {
  const teams = await fetch(link, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "d577cf053emsh1b8a8b8d46e7f2dp15155cjsn8e5804a2c58a",
    },
  });
  if (teams.status > 400) {
    console.log("There was an error");
  } else {
    const data = await teams.json();
    console.log(data);
    const teamList = data.response;
    console.log(teamList);
    teamList.forEach((singleTeam) => displayTeams(singleTeam, addTeam));
  }
}

showEnglishTeams.addEventListener(
  "click",
  getTeams(
    "https://api-football-v1.p.rapidapi.com/v3/teams?league=39&season=2020",
    addEnglishTeams
  )
);

showSpanishTeams.addEventListener(
  "click",
  getTeams(
    "https://api-football-v1.p.rapidapi.com/v3/teams?league=140&season=2020",
    addSpanishTeams
  )
);

showRomanianTeams.addEventListener(
  "click",
  getTeams(
    "https://api-football-v1.p.rapidapi.com/v3/teams?league=283&season=2020",
    addRomanianTeams
  )
);

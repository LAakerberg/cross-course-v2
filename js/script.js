const contentBox = document.querySelector(".campaign");

const url = "https://mmo-games.p.rapidapi.com/games";

setTimeout(function () {
  contentBox.innerHTML += `<div class="mmorpggames">`;
  contentBox.innerHTML += `<div class="arpggames">`;
  contentBox.innerHTML += `<div class="shootergames">`;

  const mmorpgBox = document.querySelector(".mmorpggames");
  const arpgBox = document.querySelector(".arpggames");
  const shooterBox = document.querySelector(".shootergames");

  async function gameList() {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "mmo-games.p.rapidapi.com",
          "x-rapidapi-key":
            "c8b0f85811mshfec9792c21f661ep1b4d5cjsnf8d688592a0b",
        },
      });
      const games = await response.json();
      console.log(games);
      mmorpgBox.innerHTML = `<div class="genre_topic"><h2>MMORP Games</h2></div>`;
      arpgBox.innerHTML = `<div class="genre_topic"><h2>ARPG Games</h2></div>`;
      shooterBox.innerHTML = `<div class="genre_topic"><h2>Shooter Games</h2></div>`;
      load.innerHTML = ``;

      for (let i = 0; i < games.length; i++) {
        const genre = games[i].genre;
        const gameTitle = games[i].title;

        if (genre === "MMORPG" && i < 10) {
          mmorpgBox.innerHTML += `<a href="details.html?id=${games[i].id}" class="gamelink"><div class="game">
          <h3>Title:</h3> ${games[i].title}
          <h4>Genre:</h4> ${games[i].genre}
          <div><img class="small-thumb" src="${games[i].thumbnail}" alt="${games[i].title}"></div>
          </div></a>`;
        }
        if (genre === "ARPG" && i < 10) {
          arpgBox.innerHTML += `<a href="details.html?id=${games[i].id}" class="gamelink"><div class="game">
          <h3>Title:</h3> ${games[i].title}
          <h4>Genre:</h4> ${games[i].genre}
          <div><img class="small-thumb" src="${games[i].thumbnail}" alt="${games[i].title}"></div>
          </div></a>`;
        } else {
          arpgBox.innerHTML = `
          <div class="genre_topic"><h2>ARPG Games</h2></div></div>
          <div class="error"><p>No games on the top list</p></div>`;
        }
        if (genre === "Shooter" && i < 10) {
          shooterBox.innerHTML += `<a href="details.html?id=${games[i].id}" class="gamelink"><div class="game">
    <h3>Title:</h3> ${games[i].title}
    <h4>Genre:</h4> ${games[i].genre}
    <div><img class="small-thumb" src="${games[i].thumbnail}" alt="${games[i].title}"></div>
    </div></a>`;
        }
      }
    } catch (error) {
      console.log("Could not load the API");
      //resultsBox.innerHTML = "Could not load the API";
      contentBox.innerHTML = `<div class="error"><p>Could not load the API</p></div>`;
    }
  }
  gameList();
}, 2500);

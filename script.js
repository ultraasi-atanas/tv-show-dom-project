//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  let newVariable = document.getElementById("atanas");
  newVariable.textContent = `Got the atanas p tag <br>`;
  episodeList.forEach(displayOne);
}

function displayOne(item, index) {
  document.getElementById("atanas").innerHTML += index + ":" + item + "<br>"; 
}

window.onload = setup();

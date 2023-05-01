// main.js
const screens = {
  MAIN_MENU: 0,
  GAME_MODE_SELECTION: 1,
  SOLO_CAMPAIGN: 2,
  COOPERATIVE_CHALLENGES: 3,
  PVP_COMPETITIONS: 4,
  COLLECTION: 5,
  SHOP: 6,
  SETTINGS: 7,
  BATTLE: 8,
  MATCH_RESULTS: 9,
};

const pvpCompetitions = new PVPCompetitions();
const matchResults = new MatchResults();
const gameModeSelection = new GameModeSelection();

let currentScreen = screens.MAIN_MENU;
let backgroundImage;

function preload() {
  backgroundImage = loadImage('path/to/your/background/image.png');
}

function setup() {
  createCanvas(800, 600);
  setupMainMenuButtons();
  createSettingsButtons();
  pvpCompetitions.setup();
   // Iniciar setup específico de cada tela
   mainMenuSetup();
   gameModeSelectionSetup();
   soloCampaignSetup();
   cooperativeChallengesSetup();
   pvpCompetitionsSetup();
   collectionSetup(); // Adicione esta linha
   shopSetup();
   settingsSetup();
   battleSetup();
   matchResultsSetup();
   matchResults.setup(); 
   soloCampaignMousePressed()
   gameModeSelection.setup(); 
   
    // ...
  if (currentScreen === screens.COOPERATIVE_CHALLENGES) {
    cooperativeChallengesSetup();
  }
  // ...
}

// ...
let menuButtons = [
  // ...
  { label: 'Competições PvP', screen: screens.PVP_COMPETITIONS },
  // ...
];
// ...

  // Adicione a chamada para a função collectionSetup() quando a tela de coleção estiver ativa
  if (currentScreen === screens.COLLECTION) {
    collectionSetup();
  }

function mouseClicked() {
  // ...

  // Adicione a chamada para a função collectionMousePressed() quando a tela de coleção estiver ativa
  if (currentScreen === screens.COLLECTION) {
    collectionMousePressed();
  }
  // ...
  switch (currentScreen) {
    // ...
    case screens.BATTLE:
      battleMousePressed();
      break;
    // ...
  }
  //...
  switch (currentScreen) {
    //...
    case screens.SHOP:
      shopMousePressed();
      break;
  }

  switch (currentScreen) {
    //...
    case screens.SHOP:
     shopSetup();
     break;
 }
 switch (currentScreen) {
  // ...
  case screens.MATCH_RESULTS:
    matchResults.draw();
    break;
  // ...
 }
 if (currentScreen === screens.COOPERATIVE_CHALLENGES) {
  cooperativeChallengesMousePressed();
}
// ...

switch (currentScreen)
{
  case screens.GAME_MODE_SELECTION:
    gameModeSelection.draw();
    break;

}

}

function draw() {
  background(backgroundImage);
  switch (currentScreen) {
    case screens.MAIN_MENU:
      drawMainMenu();
      break;
    case screens.GAME_MODE_SELECTION:
      drawGameModeSelection();
      break;
    case screens.SOLO_CAMPAIGN:
      drawSoloCampaign();
      break;
    case screens.COOPERATIVE_CHALLENGES:
      drawCooperativeChallenges();
      break;
      case screens.PVP_COMPETITIONS:
        pvpCompetitions.draw();
        break;
    case screens.COLLECTION:
      drawCollection();
      break;
    case screens.SHOP:
      drawShop();
      break;
    case screens.SETTINGS:
      drawSettings();
      break;
    case screens.BATTLE:
      drawBattle();
      break;
    case screens.MATCH_RESULTS:
      drawMatchResults();
      break;

  
  }
}

function mouseClicked() {
  // Adicione a lógica de clique do mouse aqui
}
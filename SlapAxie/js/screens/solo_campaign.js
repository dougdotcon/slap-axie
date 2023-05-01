// solo_campaign.js

// Inicializar variáveis e componentes necessários para a campanha solo
let soloCampaignLevels;
let soloCampaignButtons;

function soloCampaignSetup() {
  // Definir e criar os níveis da campanha solo
  soloCampaignLevels = [
    { title: "Fase 1", screen: null },
    { title: "Fase 2", screen: null },
    { title: "Fase 3", screen: null },
    // Adicionar mais fases conforme necessário
  ];

  soloCampaignButtons = [];

  let buttonWidth = 200;
  let buttonHeight = 50;
  let buttonSpacing = 70;
  let yOffset = height / 2 - soloCampaignLevels.length * buttonSpacing / 2;

  soloCampaignLevels.forEach((level, index) => {
    let b = createButton(level.title);
    b.position(width / 2 - buttonWidth / 2, yOffset + index * buttonSpacing);
    b.size(buttonWidth, buttonHeight);
    b.mousePressed(() => {
      currentScreen = level.screen;
    });
    soloCampaignButtons.push(b);
    b.hide();
  });
}

function drawSoloCampaign() {
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Campanha Solo", width / 2, height / 4);

  showMainMenuButtons(false);
  showSoloCampaignButtons(true);
}

function showSoloCampaignButtons(show) {
  soloCampaignButtons.forEach(button => {
    show ? button.show() : button.hide();
  });
}

// Atualizar o arquivo main.js
function setup() {
  createCanvas(800, 600);
  // Chamadas para a função setup das outras telas
  soloCampaignSetup();
}

function mouseClicked() {
  switch (currentScreen) {
    case screens.MAIN_MENU:
      // Inserir lógica para passar para a próxima tela quando clicar no botão de menu
      break;
    case screens.SOLO_CAMPAIGN:
      // Insira a lógica para trocar de tela (ou outra ação) quando clicar em um botão de nível
      soloCampaignMousePressed();
      break;
    // Semelhante para outras telas
  }
}

function draw() {
  background(245);
  // Desenha a tela conforme o estado atual
  switch (currentScreen) {
    case screens.MAIN_MENU:
      drawMainMenu();
      break;
    case screens.SOLO_CAMPAIGN:
      drawSoloCampaign();
      break;
    // Semelhante para outras telas
  }
}
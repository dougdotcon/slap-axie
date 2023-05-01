function drawSettings() {
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Configurações", width / 2, height / 4);

  showMainMenuButtons(false);
  showGameModeButtons(false);
  showSettingsButtons(true);
}

let settingsButtons = [];

function createSettingsButtons() {
  let buttonWidth = 200;
  let buttonHeight = 50;
  let buttonSpacing = 70;
  let settingsY = height / 2 - buttonSpacing;

  let settingsOptions = [
    { label: "Opções de áudio", screen: null },
    { label: "Mudar idioma", screen: null },
    { label: "Contato/Suporte", screen: null },
    { label: "Créditos", screen: null },
    { label: "Voltar", screen: screens.MAIN_MENU },
  ];

  settingsOptions.forEach((option, index) => {
    let sb = createButton(option.label);
    sb.position(width / 2 - buttonWidth / 2, settingsY + index * buttonSpacing);
    sb.size(buttonWidth, buttonHeight);
    sb.mousePressed(() => {
      currentScreen = option.screen;
    });
    settingsButtons.push(sb);
  });

  showSettingsButtons(false);
}

function showSettingsButtons(show) {
  settingsButtons.forEach((button) => {
    show ? button.show() : button.hide();
  });
}
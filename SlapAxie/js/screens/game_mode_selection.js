function drawGameModeSelection() {
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Selecione o modo de jogo", width / 2, height / 4);
  }

  // game_mode_selection.js

class GameModeSelection {
  constructor() {
    this.buttonWidth = 200;
    this.buttonHeight = 50;
    this.buttonSpacing = 70;
    this.buttons = [];
  }

  setup() {
    this.createButtons();
  }

  createButtons() {
    const startY = height / 3 - this.buttonSpacing / 2;

    const buttonLabels = [
      { label: 'Campanha solo', screen: screens.SOLO_CAMPAIGN },
      { label: 'Desafios cooperativos', screen: screens.COOPERATIVE_CHALLENGES },
      { label: 'Competições PvP', screen: screens.PVP_COMPETITIONS },
      { label: 'Voltar', action: this.goBack },
    ];

    buttonLabels.forEach((button, index) => {
      const btn = createButton(button.label);
      btn.position(width / 2 - this.buttonWidth / 2, startY + index * this.buttonSpacing);
      btn.size(this.buttonWidth, this.buttonHeight);
      if (button.screen !== undefined) {
        btn.mousePressed(() => (currentScreen = button.screen));
      } else {
        btn.mousePressed(button.action.bind(this));
      }
      this.buttons.push(btn);
    });
  }

  goBack() {
    currentScreen = screens.MAIN_MENU;
    this.hideButtons();
  }

  showButtons() {
    this.buttons.forEach((button) => button.show());
  }

  hideButtons() {
    this.buttons.forEach((button) => button.hide());
  }

  draw() {
    background(245);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Seleção de Modo de Jogo", width / 2, height / 4);
    this.showButtons();
  }
}

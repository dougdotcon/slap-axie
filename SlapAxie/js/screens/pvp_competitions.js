function drawPvpCompetitions() {
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Competições PvP", width / 2, height / 4);
  }

  // pvp_competitions.js

class PVPCompetitions {

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
      { label: 'Partida rápida', action: this.startQuickMatch },
      { label: 'Torneio', action: this.startTournament },
      { label: 'Voltar', action: this.goBack },
    ];

    buttonLabels.forEach((button, index) => {
      const btn = createButton(button.label);
      btn.position(width / 2 - this.buttonWidth / 2, startY + index * this.buttonSpacing);
      btn.size(this.buttonWidth, this.buttonHeight);
      btn.mousePressed(button.action.bind(this));
      this.buttons.push(btn);
    });
  }

  startQuickMatch() {
    console.log('Início de partida rápida.');
    // Adicione a lógica para iniciar uma partida rápida aqui.
  }

  startTournament() {
    console.log('Início de torneio.');
    // Adicione a lógica para iniciar um torneio aqui.
  }

  goBack() {
    // Altere a tela quando o botão Voltar for clicado
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
    text("Competições PVP", width / 2, height / 4);
    this.showButtons();
  }
}
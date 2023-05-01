function drawMatchResults() {
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Resultados da Partida", width / 2, height / 4);
  }

  // match_results.js

class MatchResults {
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
    const startX = width / 2 - this.buttonWidth / 2;
    const startY = height / 2 + this.buttonSpacing;

    const buttonLabels = [
      { label: 'Jogar novamente', action: this.playAgain },
      { label: 'Compartilhar resultado', action: this.shareResult },
      { label: 'Voltar ao menu principal', action: this.goBack },
    ];

    buttonLabels.forEach((button, index) => {
      const btn = createButton(button.label);
      btn.position(startX, startY + index * this.buttonSpacing);
      btn.size(this.buttonWidth, this.buttonHeight);
      btn.mousePressed(button.action.bind(this));
      this.buttons.push(btn);
    });
  }

  playAgain() {
    console.log('Jogar novamente.');
    // Adicione a lógica para reiniciar a partida aqui.
  }

  shareResult() {
    console.log('Compartilhar resultado.');
    // Adicione a lógica para compartilhar o resultado da partida aqui.
  }

  goBack() {
    // Altere a tela quando o botão Voltar ao menu principal for clicado
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
    text("Resultado da partida", width / 2, height / 4);
    textSize(24);
    text("Estatísticas e detalhes da partida...", width / 2, height / 3);
    this.showButtons();
  }
}

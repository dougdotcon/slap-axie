function drawMainMenu() {
    // Adicionar imagens, texturas e animações específicas da tela de menu principal

    textAlign(CENTER, CENTER);
    textSize(32);
    text("Menu Principal", width / 2, height / 4);
  
    showMainMenuButtons(true);
    showGameModeButtons(false);
  }
  
  
  function mouseClicked() {
    // Adicionar lógica de clique do mouse para elementos interativos na tela de menu principal
  }
  
  
  function setupMainMenuButtons() {
    let buttonWidth = 200;
    let buttonHeight = 50;
    let buttonSpacing = 70;
  
    let mainMenuY = height / 2 - buttonSpacing;
  
    let menuButtons = [
      { label: 'Modo de Jogo', screen: screens.GAME_MODE_SELECTION },
      { label: 'Coleção', screen: screens.COLLECTION },
      { label: 'Loja', screen: screens.SHOP },
      { label: 'Configurações', screen: screens.SETTINGS },
      // Adicione mais botões para as outras telas
    ];
  
    menuButtons.forEach((button, index) => {
      let b = createButton(button.label);
      b.position(width / 2 - buttonWidth / 2, mainMenuY + index * buttonSpacing);
      b.size(buttonWidth, buttonHeight);
      b.mousePressed(() => {
        currentScreen = button.screen;
      });
      mainMenuButtons.push(b);
    });
  }
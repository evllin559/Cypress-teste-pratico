

it('Deve adicionar ao carrinho (true) e depois remover (false)', () => {
  cy.visit('https://www.kabum.com.br/produto/723235/placa-de-video-xfx-amd-radeon-rx-7600-gaming-graphics-card-8gb-gddr6-rx-76pmbabfy');

  
cy.get('#purchaseButtonMobile').click();
cy.visit('https://www.kabum.com.br/carrinho').click();

});


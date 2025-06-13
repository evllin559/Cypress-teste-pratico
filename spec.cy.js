// support/e2e.js ou support/commands.js
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

// login.cy.js ou onde estiver teu teste
describe('Login Kabum Evlin', () => {
  it('Deve logar com email e senha corretos', () => {
    cy.visit('https://www.kabum.com.br/login')
    cy.get('[data-testid="login-input"]').type('evlinsouza362@gmail.com')
    cy.get('input[name="password"]').type('Evlin@24')
    cy.get('button[type="submit"]').click()
  })

  it('Deve adicionar ao carrinho', () => {
    cy.visit('https://www.kabum.com.br/produto/723235/placa-de-video-xfx-amd-radeon-rx-7600-gaming-graphics-card-8gb-gddr6-rx-76pmbabfy');
    cy.get('#purchaseButtonMobile').click();
    cy.contains('Produto adicionado no carrinho', { timeout: 10000 }).should('be.visible');
    cy.wait(5000);
    cy.visit('https://www.kabum.com.br/carrinho');
    cy.contains('button', 'Entendi').click({ force: true });
    cy.get('#removerTodosProdutos').click();
     cy.contains('Span', 'Sim').click({ force: true });
     cy.contains('O seu Carrinho está vazio', { timeout: 10000 }).should('be.visible');
  });

  

});

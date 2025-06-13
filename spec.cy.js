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
})


it('Deve adicionar ao carrinho (true) e depois remover (false)', () => {
  cy.visit('https://www.kabum.com.br/produto/723235/placa-de-video-xfx-amd-radeon-rx-7600-gaming-graphics-card-8gb-gddr6-rx-76pmbabfy');

  
cy.get('#purchaseButtonMobile').click();
// cy.visit('https://www.kabum.com.br/carrinho').click();

});

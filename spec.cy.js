describe('Login Kabum', () => {
it('faz login com usuário Evlin', () => {
  // Garante que a URL de login está correta
  cy.visit('https://www.kabum.com.br/login');

  // Preenche o campo de login (email/CPF/CNPJ)
  cy.get('input[data-testid="login-input"]').type('evlinsouza362@gmail.com');

  // Preenche o campo da senha
cy.get('input[data-testid="password-input"]').type('Evlin@24');
  // Clica no botão "ENTRAR" (usando o texto, já que não tem um ID ou data-testid visível)
cy.get('button[data-testid="login-submit-button"]').click();



  cy.url().should('not.include', '/login');
  cy.url().should('include', 'https://www.kabum.com.br'); // Ou 'https://www.kabum.com.br/minha-conta' se for o caso

  // --- FIM DA PARTE PARA CONFIRMAR O LOGIN ---
});
});

describe('Navegação e Adição e Remoção no Carrinho da Kabum', () => {

it('Deve adicionar um produto ao carrinho e depois remover todos', () => {
  // Passo 1: Visitar diretamente a página de um produto específico.
  // Isso é mais eficiente do que visitar a home e depois navegar.
  

  
describe('Fluxo: Adicionar Produto e Navegar para o Carrinho', () => {

it('Deve adicionar um produto e depois ir para a página do carrinho', () => {
  // 1. Visitar a página inicial da Kabum
  cy.visit('https://www.kabum.com.br/');

  // 2. Clicar em um produto no carrossel (swiper-slide) para ir para a página de detalhes do produto.
  // O seletor '.swiper-slide-next > .p-\[2px\]' é volátil.
  // Se o elemento clicável for um link ou um card de produto, tente algo mais específico.
  // Exemplo comum: pegar o primeiro card de produto visível no carrossel e clicar no link ou no card inteiro.
  cy.get('.swiper-slide-next').first().click(); // Tenta clicar no primeiro slide que é o próximo
  // OU cy.get('.product-card-link').first().click(); // Se houver um link dentro do slide para o produto

  // 3. Aguardar a página do produto carregar.
  cy.url().should('include', '/produto/'); // Confirma que a URL mudou para a página do produto
  cy.wait(1000); // Pequena espera, ajuste se necessário, ou use uma asserção de visibilidade de um elemento na página do produto.

cy.visit('https://www.kabum.com.br/carrinho');
cy.url().should('contains', 'https://www.kabum.com.br/');
cy.visit('https://www.kabum.com.br/produto/723235/placa-de-video-xfx-amd-radeon-rx-7600-gaming-graphics-card-8gb-gddr6-rx-76pmbabfy');


});
});


});
});
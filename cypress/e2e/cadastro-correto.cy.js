describe('Cadastro correto', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
  })
  it('Deve preencher os campos do formulário corretamente para cadastra um novo usuário', () => {

    cy.cadastrar ('José Cuervo','josecuervo@email.com','Senha123');
  
  
  })
})
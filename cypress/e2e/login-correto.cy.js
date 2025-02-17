describe('Pagina de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve preencher os campos de login corretamente e autenticar o usuário', () => {
        cy.login('josecuervo@email.com','Senha123');
        // comando personalizado para boas praticas de programação e deiza o cod. mais limpo, ele subistui tudo abaixo e foi previamente programdo na aba suport>commands.js
      //cy.get('[data-test="input-loginEmail"]').type('josecuervo@email.com');
      //cy.get('[data-test="input-loginPassword"]').type('Senha123');
      //cy.get('[data-test="submit-button"]').click();
    })
  })        
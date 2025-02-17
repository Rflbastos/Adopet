describe('Api Adopet', () =>{
    
 
    it ('Mensagens de API', () =>{
        cy.request({
            method: 'GET',
            url:'https://adopet-api-i8qu.onrender.com/mensagem/bcf282a8-d6e8-4df8-99d1-a35394b08a25',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            
        })
    })
})
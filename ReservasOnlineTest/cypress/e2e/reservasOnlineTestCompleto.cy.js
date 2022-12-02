describe('1. Validar Login, Compra e Envio de E-mail', () => {
    it('01. Validar Login, Compra e Envio de E-mail', () => {
    cy.visit('https://reservas.desbravador.com.br/hotel-app/hotel-1111')
    cy.fazerLoginComSucesso()
    cy.selecaoDeDatas()
    cy.quartosETarifas()
    cy.personalizacao()
    cy.preencherPagamentoComLogin()
    cy.confirmCaptcha()
    cy.wait(20000) // Intervalo de tempo para resolução do reCaptcha
    cy.get('.sc-hLBbgP').click({force:true})
    cy.get(':nth-child(1) > .sc-dkrFOg').click()
    cy.acessarMinhasReservas()
    cy.get(':nth-child(2) > .sc-oZIhv > :nth-child(4) > .d-flex > .btn-secondary').click({force:true})
    cy.get(':nth-child(1) > .toast-message').should('be.visible').and('have.text', 'E-mail enviado')
    })    
})
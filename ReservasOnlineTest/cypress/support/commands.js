Cypress.Commands.add('selecaoDeDatas', () => {
    cy.get(':nth-child(1) > :nth-child(1) > .day > div', {timeout: 15000}).click({force:true})
    cy.get('.month2 > tbody > :nth-child(1) > :nth-child(7) > .day > div', {timeout: 15000}).click({force:true})
    cy.get(':nth-child(1) > :nth-child(1) > .mb-3 > .form-control', {timeout: 15000}).focus().type('2')
    cy.get('.btn-group > .dropdown-toggle', {timeout: 15000}).click({force:true})
    cy.get('#faixa1').focus().type('1')
    cy.get('.mb-3 > .sc-hLBbgP').click({force:true})
})

Cypress.Commands.add('selecaoDeDatasComErro', () => {
    cy.get(':nth-child(1) > :nth-child(1) > .mb-3 > .form-control', {timeout: 15000}).focus().type('2')
    cy.get('.btn-group > .dropdown-toggle', {timeout: 15000}).click({force:true})
    cy.get('#faixa1').focus().type('1')
    cy.get('.mb-3 > .sc-hLBbgP').click({force:true})
})

Cypress.Commands.add('quartosETarifas', () => {
    cy.get('.btn-add', {timeout: 15000}).click({force:true})
})

Cypress.Commands.add('personalizacao', () => {
    cy.get('.sc-hLBbgP', {timeout: 15000}).click()
    cy.get('.col-12 > .sc-hLBbgP', {timeout: 15000}).click()
})

Cypress.Commands.add('preencherPagamento', () => {
    cy.get(':nth-child(1) > :nth-child(1) > .row > .col-md-12 > .mb-3 > .form-control').focus().type('desbravador@test.com.br')
    cy.get(':nth-child(1) > .mb-3 > .input-group > .form-control').focus().type('4000000000000044')
    cy.get(':nth-child(4) > :nth-child(2) > .mb-3 > .form-control').focus().type('DESBRAVADOR SOFTWARE')
    cy.get(':nth-child(4) > :nth-child(3) > .mb-3 > .form-control').focus().type('12/23')
    cy.get(':nth-child(4) > .mb-3 > .form-control').focus().type('123')
    cy.get(':nth-child(1) > .col-md-12 > .form-check > .form-check-input').click()
})

Cypress.Commands.add('preencherPagamentoComErro', () => {
    cy.get(':nth-child(1) > :nth-child(1) > .row > .col-md-12 > .mb-3 > .form-control').focus().type('desbravador@software.com.br')
    cy.get(':nth-child(2) > :nth-child(2) > .mb-3 > .form-control').focus().type('1234567899999999999')
    cy.get(':nth-child(1) > .mb-3 > .input-group > .form-control').focus().type('4000000000000044')
    cy.get(':nth-child(4) > :nth-child(2) > .mb-3 > .form-control').focus().type('DESBRAVADOR SOFTWARE')
    cy.get(':nth-child(4) > :nth-child(3) > .mb-3 > .form-control').focus().type('12/23')
    cy.get(':nth-child(4) > .mb-3 > .form-control').focus().type('123')
    cy.get(':nth-child(1) > .col-md-12 > .form-check > .form-check-input').click()
})

Cypress.Commands.add('preencherPagamentoSemTermosDeUso', () => {
    cy.get(':nth-child(1) > :nth-child(1) > .row > .col-md-12 > .mb-3 > .form-control').focus().type('desbravador@test.com.br')
    cy.get(':nth-child(1) > .mb-3 > .input-group > .form-control').focus().type('4000000000000044')
    cy.get(':nth-child(4) > :nth-child(2) > .mb-3 > .form-control').focus().type('DESBRAVADOR SOFTWARE')
    cy.get(':nth-child(4) > :nth-child(3) > .mb-3 > .form-control').focus().type('12/23')
    cy.get(':nth-child(4) > .mb-3 > .form-control').focus().type('123')
})

Cypress.Commands.add('fazerLoginComErro', () => {
    cy.get('#popover-login > .ml-1', {timeout: 15000}).click()
    cy.get('form > :nth-child(1) > .col-12 > .mb-3 > .form-control').focus().type('123@123.com.br')
    cy.get(':nth-child(2) > .col-12 > .mb-3 > .form-control').focus().type('senhaerrada')
    cy.get('.col > .sc-hLBbgP').focus().click()
})

Cypress.Commands.add('fazerLoginComSucesso', () => {
    cy.get('#popover-login > .ml-1', {timeout: 15000}).click()
    cy.get('form > :nth-child(1) > .col-12 > .mb-3 > .form-control').focus().type('123@123.com')
    cy.get(':nth-child(2) > .col-12 > .mb-3 > .form-control').focus().type('123456')
    cy.get('.col > .sc-hLBbgP').focus().click()
})

Cypress.Commands.add('acessarMinhasReservas', () => {
    cy.get('#nav-user > .dropdown-toggle').click()
    cy.get('[href="/hotel-app/hotel-1111/reservations"]').click()
})

Cypress.Commands.add('acessarMeusDados', () => {
    cy.get('#nav-user > .dropdown-toggle').click()
    cy.get('[href="/hotel-app/hotel-1111/profile"]').click()
})

Cypress.Commands.add('confirmCaptcha', function () {
    cy.get('iframe')
      .first()
      .then((recaptchaIframe) => {
        const body = recaptchaIframe.contents()
        cy.wrap(body).find('.recaptcha-checkbox-border').click()
      })
  })

  Cypress.Commands.add('preencherPagamentoComLogin', () => {
    cy.get(':nth-child(1) > .mb-3 > .input-group > .form-control').focus().type('4000000000000044')
    cy.get(':nth-child(4) > :nth-child(2) > .mb-3 > .form-control').focus().type('DESBRAVADOR SOFTWARE')
    cy.get(':nth-child(4) > :nth-child(3) > .mb-3 > .form-control').focus().type('12/23')
    cy.get(':nth-child(4) > .mb-3 > .form-control').focus().type('123')
    cy.get(':nth-child(1) > .col-md-12 > .form-check > .form-check-input').click()
})
describe('2. Testes Reservas Online', () => {
  beforeEach(() => cy.visit('https://reservas.desbravador.com.br/hotel-app/hotel-1111'))

  it('01. Validar mensagem de erro Selecione a Dada no Calendário', () => {
    cy.selecaoDeDatasComErro()
    cy.get('.toast-message').should('be.visible').and('have.text', 'Selecione a data no Calendário')
  })

  it('02. Validar mensagem de erro O número máximo de ocupantes para este quarto é 3', () => {
    cy.selecaoDeDatas()
    cy.get('.btn-group > .dropdown-toggle', {timeout: 15000}).click()
    cy.get('#faixa2').focus().type('2')
    cy.get('.swal2-popup').should('be.visible').and('contains.text', 'O número máximo de ocupantes para este quarto é 3')
  })

  it('03. Validar mensagem de erro Login inválido', () => {
    cy.fazerLoginComErro()
    cy.get('.toast-message').should('be.visible').and('have.text', 'Login inválido')
  })

  it('04. Validar mensagem de sucesso no Login', () => {
    cy.fazerLoginComSucesso()
    cy.get('.toast-message').should('be.visible').and('have.text', 'Logado com sucesso')
  })

  it('05. Validar mensagem de envio de email de confirmação', () => {
    cy.fazerLoginComSucesso()
    cy.acessarMinhasReservas()
    cy.get(':nth-child(2) > .sc-oZIhv > :nth-child(4) > .d-flex > .btn-secondary').click({force:true})
    cy.get(':nth-child(1) > .toast-message').should('be.visible').and('have.text', 'E-mail enviado')
  })

  it('06. Validar mensagem de Dados atualizados com sucesso', () => {
    cy.fazerLoginComSucesso()
    cy.acessarMeusDados()
    cy.get('.sc-hLBbgP').click()
    cy.get(':nth-child(1) > .toast-message').should('be.visible').and('have.text', 'Dados atualizados com sucesso')
  })

  it('07. Adicionar uma nova reserva com sucesso', () => {
    cy.selecaoDeDatas()
    cy.quartosETarifas()
    cy.personalizacao()
    cy.get('.toast-message').should('be.visible').and('have.text', 'Adicionado com sucesso!')
  })
  
  it('08. Validar mensagem de erro ReCaptcha', () => {
    cy.selecaoDeDatas()
    cy.quartosETarifas()
    cy.personalizacao()
    cy.preencherPagamento()
    cy.get('.sc-hLBbgP').click({force:true})
    cy.get('.toast-message').should('be.visible').and('have.text', 'Por favor, complete a validação recaptcha')
  })

  it('09. Validar mensagem de Uso de Termos', () => {
    cy.selecaoDeDatas()
    cy.quartosETarifas()
    cy.personalizacao()
    cy.preencherPagamento()
    cy.get('.d-flex > .link').click()
    cy.get('.modal-title').should('be.visible').and('have.text', 'Políticas')
  })


  // Teste semi-automático em razão do reCaptcha
  it('10. Efetuar pagamento com sucesso', () => {
    cy.selecaoDeDatas()
    cy.quartosETarifas()
    cy.personalizacao()
    cy.preencherPagamento()
    cy.confirmCaptcha()
    cy.wait(20000) // Intervalo de tempo para resolução do reCaptcha
    cy.get('.sc-hLBbgP').click({force:true})
    cy.get('.sc-caPbAK > :nth-child(3)').should('be.visible').and('have.text', 'Um e-mail foi enviado com as informações e formas de pagamento da sua reserva!')
  })

    // Teste semi-automático em razão do reCaptcha
    it('11. Validar mensagem de erro no cadastro de usuário', () => {
      cy.selecaoDeDatas()
      cy.quartosETarifas()
      cy.personalizacao()
      cy.preencherPagamentoComErro()
      cy.confirmCaptcha()
      cy.wait(20000) // Intervalo de tempo para resolução do reCaptcha
      cy.get('.sc-hLBbgP').click({force:true})
      cy.get('.toast-message').should('be.visible').and('have.text', 'Erro ao cadastrar usuário')
    })

    // Teste semi-automático em razão do reCaptcha
    it('12. Validar mensagem de erro Termos de Uso', () => {
      cy.selecaoDeDatas()
      cy.quartosETarifas()
      cy.personalizacao()
      cy.preencherPagamentoSemTermosDeUso()
      cy.confirmCaptcha()
      cy.wait(20000) // Intervalo de tempo para resolução do reCaptcha
      cy.get('.sc-hLBbgP').click({force:true})
      cy.get('#swal2-title').should('be.visible').and('have.text', 'Termos de Uso')
    })
})
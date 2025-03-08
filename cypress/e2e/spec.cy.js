///<reference types="cypress"/>
describe('form new date', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  it('testUI', () => {
    const btnSaveDate = "input[type='submit'][value='Guardar Paciente']"
    const titleHeading="h1"
    cy.get(titleHeading).should('be.visible').contains("Seguimiento pacientes")
    cy.get(btnSaveDate).should('be.visible')
  })

  it("create date",() => {
    const inputName = '#mascota'
    const inputOwner = "#propietario"
    const inputEmail = "#email"
    const inputAdmission ="#Alta"
    const inputSymptoms = "#Sintomas"
    const btnSaveDate = "input[type='submit'][value='Guardar Paciente']"
    cy.get(inputName).type("pever jr")
    cy.get(inputOwner).type("emanuel de jesus")
    cy.get(inputEmail).type("correo@correo.com")
    cy.get(inputAdmission).type("2025-02-10")
    cy.get(inputSymptoms).type("No duerme")
    cy.get(btnSaveDate).click()
    cy.get('.pacientes').should('be.visible')
    cy.screenshot()
  })
})
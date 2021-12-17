describe('Pizza Order Form', () => {


    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('does it work?', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    })

    const nameInput = () => cy.get('input[id=name-input]');
    const instructInput = () => cy.get('input[id=special-text]');
    const submitBtn = () => cy.get('button[id=order-button]');
    const toppings = () => cy.get('[type="checkbox"]');
    const foobarInput = () => cy.get('input[name=foobar]');

    it('Are elements showing up correctly?', () => {
        nameInput().should('exist');
        instructInput().should('exist');
        submitBtn().should('exist');
        toppings().should('exist');
        foobarInput().should('not.exist');
    })

    describe('Filling out inputs', () => {
        it('Can you type in the inputs for name and special instructions?', () => {
            nameInput()
            .should('have.value', '')
            .type('Jack')
            .should('have.value', 'Jack')

            instructInput()
            .should('have.value', '')
            .type('instructions')
            .should('have.value', 'instructions')
        })

        it('Can you choose toppings?', () => {
            toppings()
            .should('not.be.checked')
            .check()
            .should('be.checked')
        })

        it('After filling out form, the submit button adds the order and clears the fields', () => {
            submitBtn().should('be.disabled');
            nameInput().type('Jane');
            cy.get('select').select('family').should('have.value', 'family');
            toppings().check();
            instructInput().type('Leave on doorstep');

            submitBtn().should('not.be.disabled').click()

            nameInput().should('have.value', '');
            instructInput().should('have.value', '');
            toppings().should('not.be.checked');
            
        })

    })


})
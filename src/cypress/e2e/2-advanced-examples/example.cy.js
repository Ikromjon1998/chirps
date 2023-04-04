
context('Cookies', () => {
    let url = 'http://localhost:8000/';
    beforeEach(() => {
        cy.visit(url);
    });

    // by clicking login button with id "login", page direct to login page
    it('By clicking login button with id "login", page direct to login page', () => {
        cy.get('#login').click();
        cy.url().should('include', '/login');
    });

    // enter email and password, then click login button
    it('Enter email and password, then click login button', () => {
        cy.visit(url + 'login');
        cy.get('#email').type('cody52@example.net');
        cy.get('#password').type('password');
        cy.get('#login').click();
        cy.url().should('include', '/dashboard');
    });
});

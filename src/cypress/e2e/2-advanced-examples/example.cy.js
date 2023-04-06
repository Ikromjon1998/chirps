
context('Cookies', () => {
    let url = 'http://localhost:8000/';

    // before each test, visit the url - declared above
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

    // by clicking "chirp" button with id "chirp", page direct to chirp page
    // can generate chirp by clicking "chirp" button
    it('By clicking "chirp" button with id "chirp", page direct to chirp page', () => {
        cy.visit(url + 'login');
        cy.get('#email').type('cody52@example.net');
        cy.get('#password').type('password');
        cy.get('#login').click();
        cy.contains('Chirps').click();
        cy.url().should('include', '/chirps');

        cy.get('#message').type('Hello World');
        cy.get('#chirp-submit').click();
        // web page should have chirp message
        cy.contains('Hello World');
    });

    /*
    // by clicking the "trigger" button, it opens edit and delete button
    // and by clicking the edit button, it opens edit chirp page
    // and by clicking the delete button, it deletes chirp
    it('By clicking the "trigger" button, it opens edit and delete button', () => {
        cy.visit(url + 'login');
        cy.get('#email').type('cody52@example.net');
        cy.get('#password').type('password');
        cy.get('#login').click();

        cy.contains('Chirps').click();

        // Clicking trigger button to open dropdown
        cy.get('#trigger')
            .click();

        // Clicking edit button to open edit chirp page
        cy.get('[data-cy="edit-button-to-redirect"]').click();

        cy.url().should('include', '/edit');


    });*/
});

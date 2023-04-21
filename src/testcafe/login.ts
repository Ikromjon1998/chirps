import {Selector} from 'testcafe';

fixture('Login Page').page('http://localhost:8000/login');

test('User can login successfully', async (t) => {
    const emailInput = Selector('#email');
    const passwordInput = Selector('#password');
    const rememberMeCheckbox = Selector('#remember_me');
    const submitButton = Selector('button').withText('Log in');

    await t
        .typeText(emailInput, 'test@example.com')
        .typeText(passwordInput, 'password')
        .click(rememberMeCheckbox)
        .click(submitButton);

    // Assert that the user is redirected to the dashboard page after successful login
    await t.expect(Selector('h2').withText('Dashboard').exists).ok();
});

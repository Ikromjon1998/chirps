import { Selector } from 'testcafe';

fixture `Register`
    .page `http://localhost:8000/register`;

test('Register a new user', async t => {
    // Fill in the registration form
    await t
        .typeText('#name', 'John Doe')
        .typeText('#email', 'johndoe@example.com')
        .typeText('#password', 'secret123')
        .typeText('#password_confirmation', 'secret123')
        .click('button[type=submit]');

    // Check if the user is redirected to the dashboard
    const dashboardHeader = Selector('h2').withText('Dashboard');
    await t.expect(dashboardHeader.exists).ok();
});

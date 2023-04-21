import { Selector } from 'testcafe';

fixture `Create Chirp`
    .page `http://localhost:8000/chirps`;

test('Register a new user', async t => {
    // Fill in the login form
    await t
        .typeText('#email', 'test@example.com')
        .typeText('#password', 'password')
        .setTestSpeed(0.1)
        .click(Selector('button').withText('Log in'));

    // Fill in textarea
    const textarea = Selector('textarea[name="message"]');
    await t.typeText(textarea, 'Hello, me!')
        .setTestSpeed(0.1);

    // Submit form
    const submitButton = Selector('button').withText('Chirp');
    await t.click(submitButton);

    // Check that the form was submitted successfully
    const chirp = Selector('p').withText('Hello, me!');
    await t.expect(chirp.exists).ok();
});

import { Selector } from 'testcafe';

fixture('Chirp App')
    .page('http://localhost:8000/chirps')
    .beforeEach(async (t) => {
        // Login as User
        await t
            .typeText('#email', 'example@iu.org')
            .typeText('#password', '12345678io')
            .setTestSpeed(0.1)
            .click(Selector('button').withText('Log in'));
    });

test('Delete chirp', async (t) => {
    // Find the delete button for the chirp
    const deleteButton = Selector('svg').withAttribute('title', 'Delete').parent();

    // Click the delete button
    await t.click(deleteButton);

    // Confirm deletion
    await t
        .click(Selector('button').withText('Delete'))
        .expect(Selector('p').withText('Test chirp').exists)
        .notOk();
});

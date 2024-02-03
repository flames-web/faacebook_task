module.exports.login = async (page,email,password) => {

    await page.goto('https://facebook.com');

    await page.waitForSelector('#email');
    await page.type('#email', email);
    await page.type('#pass', password);
    await page.click('[type="submit"]')

    await page.waitForNavigation();
}
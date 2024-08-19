import puppeteer from 'puppeteer';
const BASE_URL = "https://manychat.com/"

async function main() {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    // Navigate the page to a URL.
    await page.goto(BASE_URL);



    await browser.close();
}
main()

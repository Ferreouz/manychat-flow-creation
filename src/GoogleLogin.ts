import puppeteer, { Browser } from 'puppeteer';
import fs from "fs/promises";

export default class GoogleLogin {
    
    private static COOKIE_PATH = "./cookies.json";
    private static LOGIN_URL = "https://accounts.google.com/signin/v2/identifier";

    constructor(
        private browser: Browser
    ) {
    }

    static async login() {
    } 

    async setCookies(): Promise<boolean> {
        const page = await this.browser.newPage();
        const cookies = JSON.parse(GoogleLogin.COOKIE_PATH);
        if(!cookies) {
            return false;
        }

        // await page.setCookie(...cookies);
        // await page.goto("https://gmail.com");
    } 
}
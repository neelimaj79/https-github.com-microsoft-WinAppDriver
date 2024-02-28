import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

Given(/^that the user is on gmail login page$/, async() => {
	await browser.url('https://accounts.google.com/')
    await expect(browser).toHaveUrl("https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=ATuJsjy1H79BP6KHsaViglsF8M9YRx0Rfr4Vrip6BBNBdT86q66EpVduAQ6NchEpwTVidyCBkg7ajQ&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1427064807%3A1709003835911521&theme=glif")

});

When(/^user enters username$/, async() => {
	await browser.$("#identifierId").setValue("neelimaj.79")
});

When(/^User clicks on next$/, async() => {
	await browser.$("//*[@id=\"identifierNext\"]/div/button/span").click()
    await browser.$("//*[@id=\"initialView\"]/div[3]").click()
});

When(/^User enters Password$/, async() => {
	await browser.$("aria/Enter your password").setValue("M@nish2609")
});

When(/^clicks on login$/, async() => {
	await browser.$("//*[@id=\"passwordNext\"]/div/button/span").click()
});

Then(/^User is logged into gmail and Gmail home page is shown$/, async() => {
	await browser.$("aria").tohavetext("Welcome, Neelima Joshi")
});

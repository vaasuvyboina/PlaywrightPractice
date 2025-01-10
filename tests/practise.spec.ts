const { chromium } = require('playwright');
import { test, expect } from '@playwright/test';
    const username = "SowjiG7"
    const password = "SowjiG7"
    const text = "Welcome SowjiG3 SowjiG3"
test.describe('Parabank Account Services', () => {
  test.beforeEach(async({page})=> {
    await page.goto('https://parabank.parasoft.com/');
    
  })
  test.afterEach(async({page})=> {
    await page.click('//*[@id="leftPanel"]/ul/li[8]/a') 
    console.log("successfully logged out")
    console.log("Check pull")
    
    
  })
  
test('Register Parabank Account', async ({page}) => {
   
    await page.click('//*[@id="loginPanel"]/p[2]/a');
    await page.waitForTimeout(1000);
    await page.locator('//*[@id="customer.firstName"]').fill('Sowjanya6')        
    await page.locator('//*[@id="customer.lastName"]').fill('G')
    await page.locator('//*[@id="customer.address.street"]').fill('CHI')
    await page.locator('//*[@id="customer.address.city"]').fill('CHI')
    await page.locator('//*[@id="customer.address.state"]').fill('IL')
    await page.locator('//*[@id="customer.address.zipCode"]').fill('39393')
    await page.locator('//*[@id="customer.phoneNumber"]').fill('838383')
    await page.locator('//*[@id="customer.ssn"]').fill('929292') 
    await page.locator('//*[@id="customer.username"]').fill(username)
    await page.locator('//*[@id="customer.password"]').fill(password)
    await page.locator('//*[@id="repeatedPassword"]').fill(password)
    await page.click('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input')
    await page.waitForTimeout(15000);
    //await page.click('//*[@id="leftPanel"]/ul/li[8]/a')   
    await page.waitForTimeout(5000);
  })

test('login to parabank', async({page})=> {
    //const browser = await chromium.launch()  
    
    //await page.waitForTimeout(1000);
    //await page.goto('https://parabank.parasoft.com/');
    await page.locator('//*[@id="loginPanel"]/form/div[1]/input').fill(username)
    await page.locator('//*[@id="loginPanel"]/form/div[2]/input').fill(password)    
    await page.click('//*[@id="loginPanel"]/form/div[3]/input')   
    await page.waitForTimeout(10000);  
    const balance = await page.textContent('//*[@id="accountTable"]/tbody/tr[1]/td[2]');
    console.log(`${text}, Account balance is:` + balance);
    await page.waitForTimeout(1500);     
    await expect(page.locator('//p[@class="smallText"]')).toHaveText(text);  
   // await page.click('//*[@id="leftPanel"]/ul/li[8]/a')
    


}
)
})

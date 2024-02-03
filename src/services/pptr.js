const pptr  = require('puppeteer');
const {sharePost,toProfile} = require('./utils');
const {login} = require('../services/login');

module.exports.pptrLogic = async (email,password,profileId)  => {

        const browser = await pptr.launch({
          headless:false,
          slowMo:20
        })
        const headless = 'false'
        let currentUrl;
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(1000000)
        await page.setViewport({width:1000,height:600})
        


        await login(page,email,password);


        if (page.url() !== '/') {
        await login(page,email,password);
        } 

        if (profileId > 1) {
          await toProfile(page,profileId)

        }  

        await new Promise(resolve => setTimeout(resolve, 2000));
    
        await page.goto('https://facebook.com/me');

    
    
        await sharePost(page);
    
        await new Promise(resolve => setTimeout(resolve, 3000));
    
    
    
    
        const numGroups = await page.evaluate(() => {
          return document.querySelectorAll('div.x78zum5.xdt5ytf.x1iyjqo2.x1n2onr6 > div > div > div:nth-child(2) > div > div > div > div.x6s0dn4.x1q0q8m5.x1qhh985.xu3j5b3.xcfux6l.x26u7qi.xm0m39n.x13fuv20.x972fbf.x9f619.x78zum5.x1q0g3np.x1iyjqo2.xs83m0k.x1qughib.xat24cr.x11i5rnm.x1mh8g0r.xdj266r.xeuugli.x18d9i69.x1sxyh0.xurb0ha.xexx8yu.x1n2onr6.x1ja2u2z.x1gg8mnh > div.x6s0dn4.xkh2ocl.x1q0q8m5.x1qhh985.xu3j5b3.xcfux6l.x26u7qi.xm0m39n.x13fuv20.x972fbf.x9f619.x78zum5.x1q0g3np.x1iyjqo2.xs83m0k.x1qughib.xat24cr.x11i5rnm.x1mh8g0r.xdj266r.x2lwn1j.xeuugli.x18d9i69.x4uap5.xkhd6sd.xexx8yu.x1n2onr6.x1ja2u2z > div.x1qjc9v5.x1q0q8m5.x1qhh985.xu3j5b3.xcfux6l.x26u7qi.xm0m39n.x13fuv20.x972fbf.x9f619.x78zum5.x1r8uery.xdt5ytf.x1iyjqo2.xs83m0k.x1qughib.xat24cr.x11i5rnm.x1mh8g0r.xdj266r.x2lwn1j.xeuugli.x4uap5.xkhd6sd.xz9dl7a.xsag5q8.x1n2onr6.x1ja2u2z > div > div').length; 
        });
    
        
  
    
        await page.waitForSelector('div[aria-label="Close"]');
        await page.click('div[aria-label="Close"]');
    
        await new Promise(resolve => setTimeout(resolve, 2000));
    
    
    
        for (let i =0;i< numGroups;i++) {
          await sharePost(page);
    
          await page.waitForSelector(`div:nth-child(${i+1}) > div > div.x6s0dn4.x1q0q8m5.x1qhh985.xu3j5b3.xcfux6l.x26u7qi.xm0m39n.x13fuv20.x972fbf.x9f619.x78zum5.x1q0g3np.x1iyjqo2.xs83m0k.x1qughib.xat24cr.x11i5rnm.x1mh8g0r.xdj266r.xeuugli.x18d9i69.x1sxyh0.xurb0ha.xexx8yu.x1n2onr6.x1ja2u2z.x1gg8mnh > div.x6s0dn4.xkh2ocl.x1q0q8m5.x1qhh985.xu3j5b3.xcfux6l.x26u7qi.xm0m39n.x13fuv20.x972fbf.x9f619.x78zum5.x1q0g3np.x1iyjqo2.xs83m0k.x1qughib.xat24cr.x11i5rnm.x1mh8g0r.xdj266r.x2lwn1j.xeuugli.x18d9i69.x4uap5.xkhd6sd.xexx8yu.x1n2onr6.x1ja2u2z > div.x1qjc9v5.x1q0q8m5.x1qhh985.xu3j5b3.xcfux6l.x26u7qi.xm0m39n.x13fuv20.x972fbf.x9f619.x78zum5.x1r8uery.xdt5ytf.x1iyjqo2.xs83m0k.x1qughib.xat24cr.x11i5rnm.x1mh8g0r.xdj266r.x2lwn1j.xeuugli.x4uap5.xkhd6sd.xz9dl7a.xsag5q8.x1n2onr6.x1ja2u2z > div > div`)
          await page.click(`div:nth-child(${i+1}) > div > div.x6s0dn4.x1q0q8m5.x1qhh985.xu3j5b3.xcfux6l.x26u7qi.xm0m39n.x13fuv20.x972fbf.x9f619.x78zum5.x1q0g3np.x1iyjqo2.xs83m0k.x1qughib.xat24cr.x11i5rnm.x1mh8g0r.xdj266r.xeuugli.x18d9i69.x1sxyh0.xurb0ha.xexx8yu.x1n2onr6.x1ja2u2z.x1gg8mnh > div.x6s0dn4.xkh2ocl.x1q0q8m5.x1qhh985.xu3j5b3.xcfux6l.x26u7qi.xm0m39n.x13fuv20.x972fbf.x9f619.x78zum5.x1q0g3np.x1iyjqo2.xs83m0k.x1qughib.xat24cr.x11i5rnm.x1mh8g0r.xdj266r.x2lwn1j.xeuugli.x18d9i69.x4uap5.xkhd6sd.xexx8yu.x1n2onr6.x1ja2u2z > div.x1qjc9v5.x1q0q8m5.x1qhh985.xu3j5b3.xcfux6l.x26u7qi.xm0m39n.x13fuv20.x972fbf.x9f619.x78zum5.x1r8uery.xdt5ytf.x1iyjqo2.xs83m0k.x1qughib.xat24cr.x11i5rnm.x1mh8g0r.xdj266r.x2lwn1j.xeuugli.x4uap5.xkhd6sd.xz9dl7a.xsag5q8.x1n2onr6.x1ja2u2z > div > div`)
    
          await page.waitForSelector('div[aria-label="Post"]')
          await page.click('div[aria-label="Post"]')
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
    
        await browser.close();
    
    
      //  } catch (error) {
      //   return error
        
      //  }
    

}
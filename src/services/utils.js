module.exports.sharePost = async (page) => {
    await page.waitForSelector('div[aria-label="Send this to friends or post it on your profile."] :first-child')
    await page.click('div[aria-label="Send this to friends or post it on your profile."] :first-child')
  
   await page.waitForSelector('div.x9f619.x1ja2u2z.x1k90msu.x6o7n8i.x1qfuztq.x10l6tqk.x17qophe.x13vifvy.x1hc1fzr.x71s49j.xh8yej3 > div > div > div:nth-child(5) > div > div.x6s0dn4.x1q0q8m5.x1qhh985.xu3j5b3.xcfux6l.x26u7qi.xm0m39n.x13fuv20.x972fbf.x9f619.x78zum5.x1q0g3np.x1iyjqo2.xs83m0k.x1qughib.xat24cr.x11i5rnm.x1mh8g0r.xdj266r.x2lwn1j.xeuugli.x18d9i69.x1sxyh0.xurb0ha.xexx8yu.x1n2onr6.x1ja2u2z > div.x6s0dn4.xkh2ocl.x1q0q8m5.x1qhh985.xu3j5b3.xcfux6l.x26u7qi.xm0m39n.x13fuv20.x972fbf.x9f619.x78zum5.x1q0g3np.x1iyjqo2.xs83m0k.x1qughib.xat24cr.x11i5rnm.x1mh8g0r.xdj266r.x2lwn1j.xeuugli.x18d9i69.x4uap5.xkhd6sd.xexx8yu.x1n2onr6.x1ja2u2z > div > div > div > div > span');
   await page.click('div.x9f619.x1ja2u2z.x1k90msu.x6o7n8i.x1qfuztq.x10l6tqk.x17qophe.x13vifvy.x1hc1fzr.x71s49j.xh8yej3 > div > div > div:nth-child(5) > div > div.x6s0dn4.x1q0q8m5.x1qhh985.xu3j5b3.xcfux6l.x26u7qi.xm0m39n.x13fuv20.x972fbf.x9f619.x78zum5.x1q0g3np.x1iyjqo2.xs83m0k.x1qughib.xat24cr.x11i5rnm.x1mh8g0r.xdj266r.x2lwn1j.xeuugli.x18d9i69.x1sxyh0.xurb0ha.xexx8yu.x1n2onr6.x1ja2u2z > div.x6s0dn4.xkh2ocl.x1q0q8m5.x1qhh985.xu3j5b3.xcfux6l.x26u7qi.xm0m39n.x13fuv20.x972fbf.x9f619.x78zum5.x1q0g3np.x1iyjqo2.xs83m0k.x1qughib.xat24cr.x11i5rnm.x1mh8g0r.xdj266r.x2lwn1j.xeuugli.x18d9i69.x4uap5.xkhd6sd.xexx8yu.x1n2onr6.x1ja2u2z > div > div > div > div > span');
  

}

module.exports.toProfile = async (page,pageId) => {
    await page.waitForSelector('svg[aria-label="Your profile"]')
    await page.click('svg[aria-label="Your profile"]')

    
    await page.waitForSelector('div.x1n2onr6 > div.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c');
    await page.click('div.x1n2onr6 > div.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c');


    await page.waitForSelector(`div.xwxc41k.x1y1aw1k > div:nth-child(1) > div:nth-child(${pageId}) > div`);
    await page.click(`div.xwxc41k.x1y1aw1k > div:nth-child(1) > div:nth-child(${pageId}) > div`);

}

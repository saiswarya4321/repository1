const {test, expect} = require('@playwright/test')
test('iFrame', async({page}) => {

    await page.goto(' https://ui.vision/demo/webtest/frames/');
    const allFrames = page.frames();
    console.log('No. of Frames:', allFrames.length);
    const frame1 = page.frameLocator('frame[src="frame_1.html"]');
    await frame1.locator('[name="mytext1"]').fill('Hello World');
    const frame2 = page.frameLocator('frame[src="frame_2.html"]');
    await frame2.locator('[name="mytext2"]').fill('Hii');

})

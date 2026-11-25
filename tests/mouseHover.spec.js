const {test, expect} = require("@playwright/test")
test.skip('Mouse hover',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/hovers')
    const user1= page.locator("xpath=//img[@alt='User Avatar']").nth(0)
    const user2= page.locator("xpath=//img[@alt='User Avatar']").nth(1)
    const user3= page.locator("xpath=//img[@alt='User Avatar']").nth(2)
    await user1.hover();
    await user2.hover();
    await user3.hover();
    await page.close()
})

test.skip('double click',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/double-click')
    const doubleClick=page.locator("#double-click-btn")
    await doubleClick.dblclick()
    await page.close()
})
test.skip('right click',async({page})=>{
    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html')
    const rightClick=page.locator("xpath=//span[@class='context-menu-one btn btn-neutral']")
       await rightClick.click({button: 'right'})
    await page.close()
})

test('drag and drop',async({page})=>{
    await page.goto('https://jqueryui.com/droppable/')
    const iFrame=page.frameLocator(".demo-frame")
    const toDrag=await iFrame.locator("#draggable")
    const toDrop=await iFrame.locator("#droppable")

       await toDrag.dragTo(toDrop)
    await page.close()
})
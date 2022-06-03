describe('SampleTest',()=>{
    it('Sample Todo Test',()=>{
    browser.url("https://lambdatest.github.io/sample-todo-app/");
    const firstItem= $('body > div > div > div > ul > li:nth-child(1) > input');
    firstItem.click();
    const secondItem= $('body > div > div > div > ul > li:nth-child(2) > input');
    secondItem.click();
    const thirditem= $('body > div > div > div > ul > li:nth-child(3) > input');
    thirditem.click();
    const addvalue= $('#sampletodotext');
    addvalue.setValue('Add new item');
    const itemadded= $('#addbutton');
    itemadded.click();
});
});
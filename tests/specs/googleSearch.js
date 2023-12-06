describe('Google Fucntion', ()=>{
it ('Google Search',()=>{
    browser.url("https://www.google.com");
    
    for( var i=0; i<600; i++){
        browser.getTitle()
    }
    const searchBOx= $('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input');
    searchBOx.click();
    const TypeLambdatest= $('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input');
    TypeLambdatest.setValue('Lambdatest');
});
});


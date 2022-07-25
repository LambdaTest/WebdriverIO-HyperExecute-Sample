
describe('Demo Function', () => {
  it('Demo steps', async () => {
  await browser.url('https://www.lambdatest.com/automation-demos/')
  for( var i=0; i<600; i++){
      await browser.getTitle()
      await browser.getTitle()
  }
  const username = $('#username')
  await username.setValue('lambda')
  const password = $('#password')
  await password.setValue('lambda123')
  const loginbutton = $('/html/body/div[1]/div[1]/section[2]/div/div/form/div[3]/button')
  await loginbutton.click()
  const displaypage = $('#developer-name')
  await displaypage.isDisplayed()
  await displaypage.setValue('demo@lambdatest.com');
  const random= $('/html/body/div[1]/div[1]/section[2]/div/div/div[1]/p[4]/label/input')
  await random.click()
  const other = $('#others')
  await other.click()
  const checkbox= $('#tried-ecom')
  await checkbox.click()
  const textArea= $('#comments')
  await textArea.setValue('Hi This is LambdaTest automation Demo')

});
});

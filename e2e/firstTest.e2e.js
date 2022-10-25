describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('check register a new skill', async () => {
    const inputNewSkill = await element(by.id('input-new'))
    const buttonAdd = await element(by.id('button-add'))

    await inputNewSkill.tap()
    await inputNewSkill.typeText('React Native')

    await buttonAdd.tap()

    expect(element(by.id('skills'))).toBeVisible()
  })
})

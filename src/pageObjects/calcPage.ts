import {browser, element, by, ElementFinder} from 'protractor';

var calculationPage = function() {
    var firstNum: ElementFinder = element(by.model('first'));
    var secondNum: ElementFinder = element(by.model('second'));
    var goButton: ElementFinder = element(by.id('gobutton'));
    var answer: ElementFinder = element(by.className('ng-binding'));
    
    this.get = async () => {
        await browser.get('http://juliemr.github.io/protractor-demo/')
    }

    this.setFirstNum = async (num: number) => {
        await firstNum.sendKeys(num)
    }

    this.setSecondNum = async (num: number) => {
        await secondNum.sendKeys(num)
    }

    this.submitAndVerifyAns = async (num: string) => {
        await goButton.click()
        await answer.getAttribute('innerText').then((text) => {
            expect(text).toBe(num)
        })
    
    }
}

export default calculationPage
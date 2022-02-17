import calculationPage from './pageObjects/calcPage';

describe('Protractor Demo App', () => {
    it('should perform addition', () => {
      const calc = new calculationPage()

      calc.get()
      calc.setFirstNum(2)
      calc.setSecondNum(4)
      calc.submitAndVerifyAns('6')

      
    });
  });
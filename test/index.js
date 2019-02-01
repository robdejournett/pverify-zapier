const should = require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('My App', () => {

  it('should load recipes', (done) => {
    const bundle = {"inputData": {
      "elgRequestID": 2359468 }
    };
//console.log("App",  App);
 //   console.log("xcreatesx" , App.creates);
  //j  console.log("xgetEligibilityResponsex",App.creates.GetEligibilityResponse);
    //console.log("xoperationx",App.triggers.recipe.operation);
    //console.log("xperformx",App.creates.GetEligibilityResponse.operation.perform);



    //appTester(App.triggers.recipe.operation.perform, bundle)
    appTester(App.creates.GetEligibilityResponse.operation.perform, bundle)
      .then(results => {
        should(results.length).above(1);

        const firstResult = results[0];
        console.log('test result: ', firstResult)
        should(firstResult.name).eql('name 1');
        should(firstResult.directions).eql('directions 1');

        done();
      })
      .catch(done);
  });

});

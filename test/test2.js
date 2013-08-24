var browser = require('./browser.js').browser;
var expect = require('expect.js');

describe('Check page contents', function(){

  it('should see the body', function(done) {
    browser.getText('p', function(err, p){
      if (err) done(err);
      expect(p).to.have.string('for illustrative examples in documents.');
      done();
    });
  });

});
var browser = require('./browser.js').browser;
var expect = require('expect.js');

describe('Test example.com', function(){

  it('should see the correct title', function(done) {
    browser.getTitle(function(err, title){
      if (err) done(err);
      expect(title).to.have.string('Example Domain');
      done();
    });
  });

});
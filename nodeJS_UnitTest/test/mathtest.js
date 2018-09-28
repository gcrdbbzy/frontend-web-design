const assert = require('chai').assert;
const app = require ('../mathweb');


inputgetAbs = app.getabs(-5);
inputgetcaptal = app.getcaptal('abcdef');
inputgetascend = app.getascend('89,12,32,2,57,99');


describe ('app', function(){

  describe ('getabs', function(){
  it('return absolute value',function(){
    assert.equal(inputgetAbs, '5');
  });
  it('return type number', function(){
     assert.typeOf(inputgetAbs,'number');
  });
  it('the  number should between the max and min JS values', function(){
    if (inputgetAbs < Number.MAX_VALUE && inputgetAbs > -Number.MAX_VALUE)
    {assert.equal(true, true);}
    else {assert.equal(false, true);}
  });


  });

  describe ('getcaptal', function(){
  it('return the word with the third letter captalized',function(){
    assert.equal(inputgetcaptal, 'abCdef');
      });
  it('return the word with type string', function(){
     assert.typeOf(inputgetcaptal,'string');
  });
  it('the length of the word should above 3', function(){
      var length = inputgetcaptal.length;
     assert.isAbove(length,3);
  });
  it('the length of the word should less than 2^53 - 1', function(){
      var length = inputgetcaptal.length;
     assert.isBelow(length,Number.MAX_VALUE);
  });

  });

    describe ('getascend', function(){
  it('app should return the ascended numbers',function(){
    assert.equal(inputgetascend, '2 12 32 57 89 99');
  });
  it('app should return type string', function(){
       assert.typeOf(inputgetascend,'string');
     });
     it('the length of the string should above 0', function(){
         var length = inputgetascend.length;
        assert.isAbove(length,3);
     });
     it('the length of the string should less than 2^53 - 1', function(){
         var length = inputgetascend.length;
        assert.isBelow(length,Number.MAX_VALUE);
     });
     it('each number should between the max and min JS values', function(){
       var arr = inputgetascend.split(' ');
     for (i = 0; i< arr.length; i++)
     {
      if (arr[i]< Number.MAX_VALUE && arr[i]> -Number.MAX_VALUE)
       {assert.equal(true, true);}
       else {assert.equal(false, true);}
     }
     });
  });
});


module.exports = {

  getabs: function(a)
{

    return  Math.abs(a);
},

getcaptal: function(b)
{

     var arr= b.split(",");
     var word1 = arr.map(
         function(val)
            {
              return val.replace(val.charAt(2), val.charAt(2).toUpperCase());
            });
    return word1.join(" ");
},


 getascend: function(c)
{
    var num = c.split(",");
    num.sort(function (a, b){return a-b;});
    var num1= num.join(" ");
    var list1= num1.replace(/[^\d]/g, " ");
    return  list1;

}

}

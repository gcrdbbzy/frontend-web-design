function getAbs()
{
    
    var txt1 = document.getElementById('txt').value;

    
    if(isNaN(txt1))
        {
            document.getElementById('txt2').value= "please input only numbers!";
        }
    else if (/^[0]\d+/.test(txt1))
        {
          document.getElementById('txt2').value= "please start with none zero!";
        }
    else if((txt1 > Number.MAX_SAFE_INTEGER))
        {
           document.getElementById('txt2').value= "the value is too big!";
        }
    else if((txt1 < Number.MIN_SAFE_INTEGER))
        {
           document.getElementById('txt2').value= "the value is too little!";
        }
    else if (txt1 == '')
        {
            document.getElementById('txt2').value= "There is no input!";
        }
    else if (txt1.indexOf('.')> 0)
        {
         document.getElementById('txt2').value= "please input integers!";
    
        }
    else
        {
             document.getElementById('txt2').value= Math.abs(txt1);
        }
    
}

function getCaptalized()
{
  
     var str = document.getElementById('word').value;
     var isletter = /^[a-zA-Z]+$/.test(str);
     var length = str.split("").length;
     if (isletter && length >= 3 && length < Number.MAX_SAFE_INTEGER)
    {
        var arr= str.split("");
        arr[2] = arr[2].toUpperCase();
        document.getElementById('word2').value= arr.join("");
    }
     else if (length < 3 && length > 0)
      {
            document.getElementById('word2').value= "please input enough letters!";
      }
     else if (length > Number.MAX_SAFE_INTEGER)
      {
            document.getElementById('word2').value= "please input less letters!"; 
      }
     else if (str == '')
         {
           document.getElementById('word2').value= "No input letters!";
        }
      else   
         {
             document.getElementById('word2').value= "please input only letters!";
         }

}



function getAscend()
{
    var list1 = document.getElementById('list').value;
    var num = list1.split(",");
    var Maxresult = num[0];
    var Minresult = num[0];
      for (var i = 0; i < num.length; i++)
		{
            var flag1 = isNaN(num[i]);
            var flag2 = isNaN(num[0]);
            var isZero1 = (/^[0]\d+/.test((num[i])));
            var isZero2 = (/^[0]\d+/.test((num[0])));
            Maxresult = Math.max(Maxresult, num[i]);
            Minresult = Math.min(Minresult, num[i]);
            
        }
    if (list1 == '')
			{
				document.getElementById('list2').value= "No input number string!";
			}
    else if (num.length > Number.MAX_SAFE_INTEGER)
			{
				document.getElementById('list2').value= "please input less numbers!";
			}
     else if (isZero1 || isZero2)
            {
				document.getElementById('list2').value= "No zero start numbers!";
			}
    else if (flag1 || flag2)
            {
				document.getElementById('list2').value= "please input right format";
			}
    else if (Maxresult > Number.MAX_SAFE_INTEGER)
            {
				document.getElementById('list2').value= "one of numbers is too big!";
			}
     else if (Minresult < Number.MIN_SAFE_INTEGER)
            {
				document.getElementById('list2').value= "one of numbers is too little!";
			}        
    else 
			{
                num.sort(function (a, b){return a-b;});
                document.getElementById('list2').value= num;
               
            }
  
    
}
     

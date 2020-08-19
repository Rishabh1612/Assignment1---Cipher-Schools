// Q1 Get Real Type

const realType = (value) => 
{
return Object.prototype.toString.call(value);
}
console.log(realType (1));
console.log(realType("a"));
console.log(realType(true));
console.log(realType ([]));
console.log(realType(null));

// Q2 Numbers in Strings

const numInStr = (params) => 
{
    var array = [];
    var k = 0;
    for(var i = 0; i < params.length; i++)
    {
        var count = 0;
        var temp = params[i];
        var temp1 = temp.split('');
        for(var j=0; j < temp1.length; j++)
        {
            if( !isNaN(temp1[j]) && temp1[j] != " " )
            {
                count++;
            }
        }
        if(count > 0)
        {
            array[k] = temp1.join('');
            k++;
        }
    }
   return(" [" + array + "] ");
}

console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));
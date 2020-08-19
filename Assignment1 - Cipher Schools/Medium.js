// Q1 Reverse Words Starting with a Particular Letter

const specialReverse = (str1,str2) => {
    var wordArray = str1.split(' ');
    var size = wordArray.length;
    for(var i = 0; i < size; i++)
    {
        if(wordArray[i][0] === str2)
        {
            var temp = wordArray[i].split('').reverse();
            wordArray[i] = temp.join('');
        }
    }

   return wordArray.join(' ');
}

console.log(specialReverse("word searches are super fun", "s"));


// Q2 Hitting the Jackpot

const testJackpot = (para) => {
    if(para.map(p => p === para[0]).filter(a=>a).length = 4)
    {
        var res = "true";
    }
    if(para.map(p => p === para[0]).filter(a=>a).length != 4)
    {
        var res = "false";
    }
   return res; 
}

console.log(testJackpot(["@", "@", "@", "@"]));

// Q3 Remove Duplicates from an Array

const removeDups= (params) => {
    var uniqueArray = [];
    
    for(var i=0; i < params.length; i++)
    {
        if(uniqueArray.indexOf(params[i]) === -1) 
        {
            uniqueArray.push(params[i]);
        }
    }
    return ('[' + uniqueArray + ']');
}
console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Taylor","John"]));
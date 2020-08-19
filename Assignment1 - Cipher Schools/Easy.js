// Q1 Count Instances of a character in a string


function charCount(letter,str) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(charCount('a',"edabit"));

// Q2 Add up the numbers from a single number


function addUp(number){
    var sum = 0;
    for(var i=number;i>0;i--)
    {
        sum=sum+i;
    }
    return sum;
}  
console.log(addUp(4))


// Q3 Replace vowels with another character

const replaceVowel = (string) =>{
    var str = string.split('');
    for(var t = 0; t < str.length; t++){
        if(str[t] == 'a')
        {
            str[t] = '1';
        }
        if(str[t] == 'e')
        {
            str[t] = '2';
        }
        if(str[t] == 'i')
        {
            str[t] = '3';
        }
        if(str[t] == 'o')
        {
            str[t] = '4';
        }
        if(str[t] == 'u')
        {
            str[t] = '5';
        }
    }
    str.join('');
    for(var t = 0; t < str.length; t++){
        return str;
    }
}
console.log(replaceVowel("karachi"));
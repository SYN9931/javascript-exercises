



function sumAll( a,b )
{  if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a<0 || b<0) return 'ERROR';
        else if(a==b) return a;
        else 
        var sum = 0;
        for(i=((a<b)?a:b);i<=((a<b)?b:a);i++)
        sum+=i;
        return sum;

    } else return 'ERROR';
}


// Do not edit below this line
module.exports = sumAll;

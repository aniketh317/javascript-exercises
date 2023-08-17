const sumAll = function() {
    let sum = 0;
    if((typeof arguments[0]!="number") || (typeof arguments[1]!="number"))
        return "ERROR";
    if(arguments[0]<0 || arguments[1]<0)
        return "ERROR";
    
    let l = arguments[0];
    let r = arguments[1];
    if(arguments[0]>arguments[1])
    {
        l = arguments[1];
        r = arguments[0];
    }
    for(i=l;i<=r;i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

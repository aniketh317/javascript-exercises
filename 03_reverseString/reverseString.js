const reverseString = function(s) {

    let tl = s.length;
    let c = [];
    for(i=tl;i>0;i--)
        c.push(s[i-1]);
    
    return c.join("");
};


// Do not edit below this line
module.exports = reverseString;

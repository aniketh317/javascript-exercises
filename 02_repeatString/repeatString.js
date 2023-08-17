const repeatString = function(s, num) {
    let ret = '';
    if(num<0)
        ret = 'ERROR';
    for(i=0;i<num;i++)
        ret += s;
    return ret;
};

// Do not edit below this line
module.exports = repeatString;

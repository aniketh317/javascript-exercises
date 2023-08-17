const leapYears = function(a) {
    let ret = false;
    if(a%4==0)
    {
        ret = true;
        if(a%100 == 0)
        {
            ret = false;
            if(a%400 == 0)
                ret = true;
        }
    }
    return ret;
};

// Do not edit below this line
module.exports = leapYears;

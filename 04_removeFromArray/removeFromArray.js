
const removeFromArray = function() {
    let a = arguments[0];
    let b = [];
    for(const c of a)
    {
        let rem = false;
        for(i=1;i<arguments.length;i++)
        {
            if(c===arguments[i])
            {
                rem = true;
                break;
            }
        }
        if(!rem)
            b.push(c);
    }
    return b;
};

// Do not edit below this line
module.exports = removeFromArray;

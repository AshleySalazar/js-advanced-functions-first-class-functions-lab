const returnFirstTwoDrivers = (drivers) => {
    return [drivers[0], drivers[1]]; 
};

const returnLastTwoDrivers = (drivers) => {
    return [drivers[2], drivers[3]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fair) => {
    return function(){
        return fair * fair
    }
}

const fareDoubler = (money) => {
   return money * 2;
}

const fareTripler = (moolah) => {
    return moolah * 3;
}

const selectDifferentDrivers = (drivers, returnDrivers) => {
    if (returnDrivers == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else {
        return returnLastTwoDrivers(drivers);
    }
}


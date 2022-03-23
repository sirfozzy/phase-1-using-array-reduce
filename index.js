const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function reduce () {
}

function batteries () {
}

function totalBatteries(batteries) {
    let totalBatteries= 31;
    for (const batteryBatches of batteries) {
    totalBatteries += batteryBatches;
    };
    return totalBatteries;
}

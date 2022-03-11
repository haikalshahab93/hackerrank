let candles = [2,3,5,6,7,8,8,8,8,6]

function birthdayCakeCandles(candles) {
    let max = 0;
    let counter = 0;

    candles.forEach(item => {
        if (item > max) {
            max = item;
            counter = 1;
        } else if (item === max) {
            counter++;
        }
    });
    return counter;
}

birthdayCakeCandles(candles)


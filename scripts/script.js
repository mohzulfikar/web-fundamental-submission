function getLuckyNumber() {
    let luckNumberCandidate = []
    for (i = 1; i < 5; i++) {
        luckNumberCandidate.concat(Math.floor(Math.random() * 99999));
    }
    let luckyNum = luckNumberCandidate[Math.floor(Math.random() * luckNumberCandidate.length)];
    return luckyNum;
};

const
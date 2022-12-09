const request = require("request");

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < 101; i++) {
    const randomNumber = getRandomNumber(20101, 22030);
    var nm1 = getRandomNumber(1, 5);
    var nm2 = getRandomNumber(1, 6);
    var nm3 = getRandomNumber(1, 5);
    var nm4 = getRandomNumber(1, 3);
    var nm5 = getRandomNumber(1, 5);

    console.log(`第${i}次 - ${randomNumber}|${nm1}${nm2}${nm3}${nm4}${nm5}`);

    //NOTE --------------------------------
    if (nm1 == 1) {
        nm1 = "0";
    }
    if (nm1 == 2) {
        nm1 = "0~300";
    }
    if (nm1 == 3) {
        nm1 = "300~600";
    }
    if (nm1 == 4) {
        nm1 = "600~900";
    }
    if (nm1 == 5) {
        nm1 = "900以上";
    }
    //NOTE --------------------------------
    if (nm2 == 1) {
        nm2 = "每天看";
    }
    if (nm2 == 2) {
        nm2 = "時常";
    }
    if (nm2 == 3) {
        nm2 = "偶爾";
    }
    if (nm2 == 4) {
        nm2 = "不常";
    }
    if (nm2 == 5) {
        nm2 = "幾乎不";
    }
    if (nm2 == 6) {
        nm2 = "沒在看";
    }
    //NOTE --------------------------------
    if (nm3 == 1) {
        nm3 = "非常願意";
    }
    if (nm3 == 2) {
        nm3 = "願意";
    }
    if (nm3 == 3) {
        nm3 = "還好";
    }
    if (nm3 == 4) {
        nm3 = "不願意";
    }
    if (nm3 == 5) {
        nm3 = "非常不願意";
    }
    //NOTE --------------------------------
    if (nm4 == 1) {
        nm4 = "是否為喜歡的動漫";
    }
    if (nm4 == 2) {
        nm4 = "價錢";
    }
    if (nm4 == 3) {
        nm4 = "實用性";
    }
    //NOTE --------------------------------
    if (nm5 == 1) {
        nm5 = "0";
    }
    if (nm5 == 2) {
        nm5 = "1~500";
    }
    if (nm5 == 3) {
        nm5 = "501~1000";
    }
    if (nm5 == 4) {
        nm5 = "1001~1500";
    }
    if (nm5 == 5) {
        nm5 = "1500以上";
    }
    //NOTE --------------------------------

    request(`https://docs.google.com/forms/d/e/x/formResponse?entry.1404484812=${randomNumber}&entry.632422732=${nm1}&entry.545014029=${nm2}&entry.156687891=${nm3}&entry.2113273917=${nm4}&entry.520628038=${nm5}`, function (error, response, body) {
        //console.log('statusCode:', response && response.statusCode);
    });
}
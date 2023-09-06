function hasDuplicates(arr) {
    let set = new Set(arr);
    console.log('check:', set, set.size);
    return set.size !== 10;
}

function numChecker(number) {
    if (number > 255 || number < 0) {
        return false;
    }
    return true;
}

function numbersCheck(a, b, c, d) {
    let str = a.toString() + b.toString() + c.toString() + d.toString();
    console.log(str);
    return hasDuplicates(str.split(''));
}

function showAnswer(arr) {
    var out = document.getElementById("output");
    out.style.display="flex";
    out.style.justifyContent="center";
    console.log(arr);
    for (let i = 1; i < 5; i++) {
        document.getElementById("ans" + i.toString()).innerHTML = arr[i - 1];
    }
}

function getIp() {
    for (let i = 1; i < 6; i++) {
        let num1 = document.getElementById(i.toString()).value;
        if (!numChecker(num1)) continue;
        for (let j = 6; j < 11; j++) {
            let num2 = document.getElementById(j.toString()).value;
            if (!numChecker(num2)) continue;
            for (let k = 11; k < 16; k++) {
                let num3 = document.getElementById(k.toString()).value;
                if (!numChecker(num3)) continue;
                for (let l = 16; l < 21; l++) {
                    let num4 = document.getElementById(l.toString()).value;
                    if (!numChecker(num4)) continue;
                    if (!numbersCheck(num1, num2, num3, num4)) {
                        showAnswer([num1, num2, num3, num4]);
                        return;
                    }
                }
            }
        }
    }
}

const isPrime = (...numbers) => {
    console.log("========== isPrime Fnc Start ==========")
    let isPrime = false;
    for (let x = 0; x < numbers.length; x++) {
        for (let i = 2; i < numbers[x]; i++) {
            (numbers[x] % i === 0) ? isPrime = false: isPrime = true
        }
        (isPrime == 0) ? console.log(`${numbers[x]} asal bir sayıdır`): console.log(`${numbers[x]} asal bir sayı değildir`)
    }
    console.log("==========  isPrime Fnc End  ==========")
    console.log(" ")
}

const isFriends = (num1, num2) => {
    console.log("========== isFriend Fnc Start ==========")
    let total1 = 0,
        total2 = 0;
    for (let i = 1; i < num1; i++) {
        if (num1 % i == 0) {
            total1 += i;
        }
    }
    for (let x = 1; x < num2; x++) {
        if (num2 % x == 0) {
            total2 += x;
        }
    }
    (num1 == total2 && num2 == total1) ?
    console.log(`${num1} ve ${num2} arkadaş sayılar`):
        console.log(`${num1} ve ${num2} arkadaş sayı değiller`);
    console.log("==========  isFriend Fnc End  ==========")
    console.log(" ")
}

const listPerfectNumbers = () => {
    console.log("========== listPerfectNumbers Fnc Start ==========")
    let total = 0
    for (let i = 1; i < 1000; i++) {
        for (let x = 1; x < i; x++) {
            if (i % x == 0) {
                total += x;
            }
        }
        if (total == i) {
            console.log(`${i} mükemmel bir sayı`)
        }
        total = 0
    }
    console.log("========== listPerfectNumbers Fnc Start ==========")
    console.log(" ")
}

const listPrimeNumbers = () => {
    console.log("========== listPrimeNumbers Fnc Start ==========")
    for (let i = 1; i < 1000; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log(i + " is Prime!");
        }
    }
    console.log("========== listPrimeNumbers Fnc Start ==========")
    console.log(" ")
}

isPrime(5, 1, 32, 54)
isPrime(2, 5, 8, 21, 13)

isFriends(220, 284)
isFriends(349, 179)

listPerfectNumbers()

listPrimeNumbers()
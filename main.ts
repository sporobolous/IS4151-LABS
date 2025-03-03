
input.onButtonPressed(Button.A, function () {
	displayNumber();
})

basic.forever(function () {
	
})

function displayNumber() {
    let num = generateRandomNumber();
    let first = getFirstNum(num);
    let last = getLastNum(num);

    basic.showNumber(num)
    basic.pause(1000)
    basic.showIcon(IconNames.Yes)
    basic.showNumber(first);
    basic.pause(1000);
    basic.showIcon(IconNames.Yes)
    basic.showNumber(last);

}

function generateRandomNumber():number {
    return randint(1,10000)
}

function getLastNum(num:number):number {
    num = num % 10
    return num;
}

function getFirstNum(num:number):number {
    while(num >=10) {
        num = Math.floor(num / 10)
    }
    return num;
}
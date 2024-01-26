/*
function moneybox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
}

moneybox(5);
moneybox(5);
*/
function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}.`)
    }
    return countCoins
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);

function createPetList() {
    const petList = []
    return function(pet){
        if(pet){
            petList.push(pet)
            return petList
        }
        return petList
    }
}

const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();
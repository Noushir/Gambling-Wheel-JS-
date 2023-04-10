//Tasks
//1.deposit money
//2.Determine no of lines to bet on
//3. Collect a bet amount
//4.spin the slot
//5.check if user won
//6.give the user their winning if they win
//7.play again
const prompt = require("prompt-sync")();


const ROWS = 3;
const COLS = 3;


const SYMBOLS_COUNT = {
    "A":2,
    "B":4,
    "C":6,
    "D":8

}

const SYMBOLS_VALUES = {
    "A":5,
    "B":4,
    "C":3,
    "D":2


}






const deposit = () => {
while(true){
    const depositAmount = prompt("Enter a deposit amount: ");
    const numbDepositAmount = parseFloat(depositAmount);

    if(isNaN(numbDepositAmount) || numbDepositAmount<=0){

        console.log("Invalid deposit amount, try again.");
    }
    else{
        return numbDepositAmount;
    }



    }

};
const getNumberOfLines = () =>{
    while(true){
        const Lines = prompt("Enter the number of Lines to bet on(1-3): ");
        const numberOfLines = parseFloat(Lines);
    
        if(isNaN(numberOfLines) || Lines<=0 || Lines > 3){
    
            console.log("Invalid Number of Lines, try again.");
        }
        else{
            return numberOfLines;
        }
    
    
    
        }
    

};

const getBet = (balance, lines) => {
    while(true){
        const Bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(Bet);
    
        if(isNaN(numberBet) || numberBet<=0 || numberBet > balance/lines){
    
            console.log("Invalid BET, try again.");
        }
        else{
            return numberBet;
        }
    
    
    
        }
    

};


const spin = () =>{
    const symbols = [];
    for (const[symbol , count] of Object.entries(SYMBOLS_COUNT)){
        for (let i =0;i<count;i++){
            symbols.push(symbol);
        }

    }
    const reels = [[],[],[]];
    for (let i =0;i<COLS;i++){
        const reelSymbols = [...symbols];
        for(let j =0;j<ROWS;j++){
            const randomIndex = Math.floor(Math.random()*reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);


        }

    }
    return reels;
};

const reels= spin();
console.log(reels);

let balance = deposit();
const numberOfLines = getNumberOfLines();
const numberBet = getBet(balance, numberOfLines);
console.log(balance);
console.log(numberOfLines);
console.log(numberBet);



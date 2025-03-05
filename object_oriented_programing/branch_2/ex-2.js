class onlineAccount {
    name;
    accountNum;
    balance;
    constructor(name, accountNum, balance) {
        this.name = name;
        this.accountNum = accountNum;
        this.balance = balance;
    }
    deposit(amount) {
        return this.balance += amount;
    }
    withdraw(amount) {
        return this.balance -= amount;
    }
    getBalance() {
        return `${this.name}$ who's ${this.accountNum} has ${this.balance}`;
    }
}
class Savings extends onlineAccount {
    name;
    accountNum;
    balance;
    constructor(name, accountNum, balance) {
        super(name, accountNum, balance);
        this.name = name;
        this.accountNum = accountNum;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount < 200) {
            console.log(`You can't deposit ${amount}, deposit must be over 200$!`);
        }
        else {
            a1.deposit(amount);
        }
    }
    withdraw(amount) {
        if (this.balance < 1000) {
            console.log('Withdraw denied, please add funds!');
        }
        else {
            a1.withdraw(amount);
        }
    }
    getBalance() {
        return `${this.name}$ who's ${this.accountNum} has ${this.balance}`;
    }
}
const generateAccNum = () => {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let genNumArr = [];
    for (let i = 0; i < 6; i++) {
        if (i <= 1) {
            const letter = Math.floor(Math.random() * alphabet.length);
            genNumArr.push(alphabet[letter]);
        }
        else if (i >= 2) {
            genNumArr.push(Math.floor(Math.random() * 1000));
        }
    }
    const generatedAcc = genNumArr.map(item => String(item));
    const final = generatedAcc.join('');
    return final;
};
const firstGenAccNum = generateAccNum();
const operations = [100, 2000, 5000, -100, -1000, 0, -300];
const a1 = new onlineAccount('Daniel', firstGenAccNum, 0);
const doOperations = () => {
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] > 0) {
            a1.deposit(operations[i]);
            console.log(a1);
        }
        else if (operations[i] < 0) {
            const s = String(operations[i]);
            const s2 = s.split('');
            s2.splice(0, 1);
            const s4 = s2.join('');
            const s5 = Number(s4);
            a1.withdraw(s4);
            console.log(a1);
        }
    }
};
doOperations();
console.log(a1);
export {};

class bank {
    createAccount(acno, pname, minbal) {
        this.acno = acno;
        this.pname = pname;
        this.bal = minbal;
    }
    deposite(amount) {
        this.bal += amount;
        console.log("account credited with" + amount + "avilable balance" + this.bal);
    }
    withdraw(amount) {
        if (amount > this.bal) {
            console.log("insufficient bal");
        } else {
            this.bal -= amount;
            console.log("account debited with" + amount + "avlb bal" + this.bal);
        }
    }
    balanceEng() {
        console.log(this.bal);
    }
}
var obj = new bank()
obj.createAccount(1200, "Akhil", 2000);
obj.deposite(4000);
obj.withdraw(5000);
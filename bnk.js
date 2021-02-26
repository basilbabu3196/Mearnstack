class Bank {
    static getAccountDetails() {
        var accountDeatails = {
            1000: { acno: 1000, name: "userone", balance: 5000, password: "user1" },
            1001: { acno: 1001, name: "usertwo", balance: 6000, password: "user2" },
            1002: { acno: 1002, name: "userthree", balance: 500, password: "user3" },
            1003: { acno: 1003, name: "userfour", balance: 600, password: "user4" },
            1004: { acno: 1004, name: "userfive", balance: 15000, password: "user5" },
            1005: { acno: 1005, name: "usersix", balance: 6000, password: "user6" }
        }
        return accountDeatails
    }
    static authenticateUser(accno, password) {
        let data = Bank.getAccountDetails()
        if (accno in data) {
            if (password == data[accno]["password"]) {
                return 0
            } else {
                return 1
            }
        } else {
            return -1
        }
    }
    static login() {
        let accno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pwd").value;
        let data = Bank.getAccountDetails()
        if (accno in data) {
            if (pwd == data[accno]["password"]) {
                alert("login Successful ")
                window.location.href = "userhome.html";
            } else {
                alert("invalid login")
            }
        } else {
            alert("there is no user with this accno")
        }
    }
    static deposite() {
        let accno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pwd").value;
        let amount = document.querySelector("#amt").value;
        let user = Bank.authenticateUser(accno, pwd)
        let data = Bank.getAccountDetails()
        if (user == 0) {
            data[accno]["balance"] += Number(amount);
            alert("aval bal" + data[accno]["balance"])
        } else if (user == 1) {
            alert("invalid password")
        } else {
            alert("invalid accno")
        }
    }
    static withdraw() {
        let accno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pwd").value;
        let amount = document.querySelector("#amt").value
        let user = Bank.authenticateUser(accno, pwd)
        let data = Bank.getAccountDetails()
        if (user == 0) {
            if (amount > data[accno]["balance"]) {
                alert("insufficient amount")

            } else {
                data[accno]["balance"] -= Number(amount)
                alert(data[accno]["balance"])
            }

        }
    }
}
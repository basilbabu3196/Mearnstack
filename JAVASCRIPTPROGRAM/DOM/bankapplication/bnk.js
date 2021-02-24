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
        }
    }
}
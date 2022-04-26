// Store the wallet amount to your local storage with key "amount"

let bal =Number(localStorage.getItem("amount"));

addamount= () =>{
    const money = Number(document.getElementById("amount").value);


    const total =bal+money;
    //console.log(typeof(total))

    //console.log(500)

    localStorage.setItem("amount" ,total);
    window.location.reload();
}

let wallet = document.getElementById("wallet");

    wallet.innerText=`Wallet : ${bal}`;
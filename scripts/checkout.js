// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let balance = localStorage.getItem("amount");

let wallet = document.getElementById("wallet");

wallet.innerText=`wallet : ${balance}`;


function confirm()
{
  

    let user = document.getElementById("user_name").value;

    let seat = document.getElementById("number_of_seats").value;

    let num=100*seat;

    if(num<=balance)
    {
        alert("booking successfull");
        balance = balance - num;
        wallet.innerText=`wallet : ${balance}`;
        localStorage.setItem("amount",balance)
    }
    else{
        alert("Insufficient Balance !");
    }
}



let movies = JSON.parse(localStorage.getItem("movie"));

console.log(movies)


let container = document.getElementById("movie");

    let div = document.createElement('div');

    let img = document.createElement('img');

    img.src = movies.Poster;

    let title = document.createElement('p');
    title.innerText= movies.Title;

    div.append(img,title);

    container.append(div);
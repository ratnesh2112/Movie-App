// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//http://www.omdbapi.com/?t=hum

async function SearchMovie()
{
    const input = document.getElementById("search").value;
    
    let res = await fetch(`http://www.omdbapi.com/?apikey=c37b75c0&s=${input}`);

    //console.log(res)

    let movie = await res.json()

    //console.log(movie.Search)

    return movie.Search;

    //append(movies)

    
}



function append(data){

    let box = document.getElementById("box");

    box.innerHTML=null

    if(data==undefined)
    {
        return false
    }
    //console.log(data)
    
    data.forEach(function(el){

        let p = document.createElement('p');

        p.innerText=el.Title;
        p.style.cursor="pointer"
        p.addEventListener("click",function(){
            movies_List(el)
        });

        box.append(p);
    })
    
}

async function main()
{
    let data = await SearchMovie();

    if(data == undefined)
    {
        return false;
    }

    append(data);
}



let id;

function debounce(fun,del)
{
    if(id)
    {
        clearTimeout(id)
    }

    id = setTimeout(function(){
        fun()
    },del)
}




function movies_List(el)
{
    let container = document.getElementById("movies");
    container.innerHTML-null;
    //console.log(data)

        let div = document.createElement('div');

        let img = document.createElement('img');

        img.src = el.Poster;

        let title = document.createElement('p');
        title.innerText= el.Title;

        let btn = document.createElement('button');
        btn.innerText="Book-Now";
        btn.setAttribute("class","book_now");
        btn.addEventListener("click",function(){
            book(el)
        });

        div.append(img,title,btn);

        container.append(div)

}

function book(el)
{

    console.log(el)
    localStorage.setItem("movie" , JSON.stringify(el));

    window.location.href="checkout.html";
}


let wallet = localStorage.getItem("amount");

document.getElementById("wallet").innerText=`wallet : ${wallet}` ;
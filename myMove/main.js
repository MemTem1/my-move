let searchResult = document.getElementById("search"),
    ara  =document.getElementById("ara"),
    moveName = document.getElementById("move-name"),
    aciklama = document.getElementById("aciklama"),
    tur  = document.getElementById("tur"),
    oyucular = document.getElementById("oyuncular"),
    yonetmen = document.getElementById("yonetmen"),
    yazar = document.getElementsByName("yazar"),
    dil  =document.getElementById("dil"),
    yil = document.getElementById("yil"),
    sure = document.getElementById("sure"),
    puan = document.getElementById("puan"),
    img = document.getElementById("img")

let api_key = "27c4a57e";

const getMove = () =>{
    let moveInput = searchResult.value;
    // console.log(moveInput)

    let api = `http://omdbapi.com/?t=${moveInput}&apikey=${api_key}`
    
    if(moveInput.length <= 0){
        alert("lütfen boş alan bırakmayın")
    }
    else{
        fetch(api)
            .then((responsive) => responsive.json())
            .then((data) => {
                sonuc(data)
                console.log(data);
                
            })
    }
    
}

const sonuc = (veri) =>{
    console.log(veri)
    yil.innerText = veri.Released
    sure.innerText = veri.Runtime
    puan.innerText  = veri.imdbRating
    moveName.innerText = veri.Title
    dil.innerText = veri.Language
    tur.innerText = veri.Country
    oyucular.innerText = veri.Actors
    yonetmen.innerText = veri.Director
    let foto = veri.Poster
    img.setAttribute("src", foto)
}






ara.addEventListener("click" , getMove)
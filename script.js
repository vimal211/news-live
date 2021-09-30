const apikey = 'd5f066129d8546e98adab3a35cfe9466';
let country = document.getElementById("country");
let news_container = document.getElementsByClassName('news')[0];

//creating structure for the news to be displayed
let fragment = `
<div class="box">
    <img src="" alt="" class="img">
    <p class="heading"></p>
    <p class="details"></p>
    <button><a target='_blank' href="" class="readmore">READ MORE</a></button>
</div>`

//url of the api
const url = `https://newsapi.org/v2/top-headlines?country=${country.value}&apiKey=${apikey}`

news_container.innerHTML="";
for(let i=0;i<3;i++){
    news_container.innerHTML += fragment;
    axios(url)
    .then(data=>{
        let heading = document.getElementsByClassName("heading")[i];
        let content = document.getElementsByClassName("details")[i];
        let readmore = document.getElementsByClassName("readmore")[i];
        let image =document.getElementsByClassName("img")[i];
        image.src = data.data.articles[i].urlToImage;
        heading.innerHTML = data.data.articles[i].title;
        content.innerHTML = data.data.articles[i].description;
        readmore.href = data.data.articles[i].url;
    })
}

//displaying news in changing the input
country.addEventListener("change", ()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${country.value}&apiKey=${apikey}`;
    news_container.innerHTML="";
    for(let i=0; i<3; i++){
        news_container.innerHTML += fragment;

        axios(url)
            .then(data => {
                let heading = document.getElementsByClassName("heading")[i];
                let content = document.getElementsByClassName("details")[i];
                let readmore = document.getElementsByClassName("readmore")[i];
                let image =document.getElementsByClassName("img")[i];
                image.src = data.data.articles[i].urlToImage;
                heading.innerHTML = data.data.articles[i].title;
                content.innerHTML = data.data.articles[i].description;
                readmore.href = data.data.articles[i].url;
            })
    }
})

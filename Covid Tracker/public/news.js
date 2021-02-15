let d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1;
let date = d.getDate();
month < 10 ? month = '0' + month : month;
let apiKey = "f1a30a811d464ac8ad3c601ebadf6c4e";
let url = `http://newsapi.org/v2/everything?q=covid-19&from=${year}-${month}-${date}&sortBy=popularity&apiKey=${apiKey}`;


let GetNews = () => {
    return fetch(url).then(res => res.json());
}
let obj = GetNews();
obj.then(data => {
    if (data.status == "ok") {
        let html = "";
        data.articles.forEach((item, i) => {
            html = `
            <div class="article">
                <h1 class="count">Article ${i + 1}</h1>
                <h1 class="title">${item.title}</h1>
                <h1 class="author">-${item.author}</h1>
            <div class="img">
                <img src="${item.urlToImage}">
            </div>
            <div class="description">
                <p>${item.description}</p>
                <a href="${item.url}" target="_blank" class="show_more_btn">Show More</a>
            </div>
        </div>`;
            document.querySelector(".articles_div").insertAdjacentHTML("beforeend", html);
        });
    }
});
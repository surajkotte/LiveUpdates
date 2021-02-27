let newsAccordian=document.getElementById("newsAccordian");
fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=be7e565ab16a45f0b123f9fc3faa8642')
.then(response => response.json())
.then(data =>{
    let newsHtml="";
    if(data.status=='ok'){
        data.articles.forEach(function(article,index) {
            newsHtml +=`<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    ${article.title}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                <div class="accordion-body">
                    ${article.content}. <a href="${article.url}">Read more here</a>
                </div>
                </div>
            </div>`;
        });
    }
    newsAccordian.innerHTML = newsHtml;
})

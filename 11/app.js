const url = `https://dapi.kakao.com/v2/search/web?query=#query&page=`;
const $docs = document.querySelector('#docs');
// const $query = document.querySelector('#query');
const $searchButton = document.querySelector('#searchButton');
const $searchForm = document.querySelector('#searchForm');
const $query = document.querySelector('[name="query"]');
const $moreBtn = document.querySelector('#more');
let page = 1;

function getFetch(url, callback) {
    const headers = {
      Authorization: 'KakaoAK 96d53071394f33f42912680ad2e17ecf',
    };
  
    fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => callback(data));
  }

  function search() {
    const query = $query.value;
    const searchUrl = url.replace('#query', query) + page.toString();

    getFetch(searchUrl, (data) => {
        const { documents } = data;
    
        const docs = documents.map(document => {
            console.log(data)
            return document.contents;
        });
    
        $docs.innerHTML = docs.join('<hr>');
    });
  }
$searchForm.addEventListener('submit', (event) => {
    console.log(11)
    search()
    event.preventDefault();
})

$moreBtn.addEventListener('click', ()=>{
  page++;
  $docs.innerHTML += '<br><hr>';
  search();
});


//   $searchButton.addEventListener('click', search)
//   $query.addEventListener('keydown', (event) => {
//     if(event.key !== 'Enter') return;
//     search();
//   })

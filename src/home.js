const bookContainer = document.querySelector('#books-container');

let books = [
  {
    image: "/public/it-ends.jpg",
    id:1 
  },
  {
    image: "/public/something-dh.jpg",
    id:2 
  },
  {
    image: "/public/clean-coder.jpg",
    id:3 
  },
  {
    image: "/public/head-first.jpeg",
    id:4 
  },
];


window.addEventListener('DOMContentLoaded', () => {
    bookContainer.innerHTML = `<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div class="animate-pulse flex space-x-4">
      <div class="rounded-full bg-slate-200 h-10 w-10"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-200 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>`;
    getBooks();
})
 function getBooks(){
   bookContainer.innerHTML = '';

   books.slice(0,4).forEach(item => {
    addCardToContainer(item);
   })
}

function addCardToContainer(book) {
    const articleEl = document.createElement('article')
    articleEl.classList.add('featured-card');
    articleEl.innerHTML = `
    <figure class="max-h-64"><img  src=${book.image} alt="book" /></figure>
    <div class="card-body">
      <button class="btn">Read</button>
      <button class="bg-amber-100 text-black btn gap-2 favorite"><i class="fa-solid fa-bookmark"></i> Add to Fav</button>
    </div>`;
    
    bookContainer.appendChild(articleEl);
}
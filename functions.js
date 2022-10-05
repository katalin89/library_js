
function creatRow(obj){
    return `<tr>
                <th class="titlu">${obj.title}</th>
                <th>${obj.author}</th>
                <th>${obj.genre}</th>
                <th>${obj.year}</th>
            </tr>`;
}

function createRows(arr){
    let text="";
    for(let i=0;i<arr.length;i++){
        text+=creatRow(arr[i]);
    }
    return text;
}


function setHome(){

    let container=document.querySelector(".box");

    
    container.innerHTML=`
    
    
    <div >
        <h1>Books</h1>
    </div>

    <div >
        <a>
            <button class="create">Create New Book</button>
        </a>
    </div>

    <table>
        <thead>
            <tr >
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Year</th>
            </tr>
        </thead>

        <tbody class="books-container">
            
        </tbody>

    </table>
    
   
    <!-- aici intra toate tagurile din tabel(e dinamic) -->
    
        </tbody>
    </table>

    
    
    `


    let booksContainer=document.querySelector(".books-container");

    booksContainer.innerHTML=createRows(books);


    let clickCreateBook=document.querySelector(".create");


    clickCreateBook.addEventListener("click",()=>{

         setNewBook();
    });

    booksContainer.addEventListener("click",(e)=>{
        let card=e.target;

        if(card.classList.contains("titlu")){
            let book=returnObiect(books,card.textContent);
            setUpdate(book);
        }
    })



}




function setNewBook(){
     
     let container=document.querySelector(".box");
    

    container.innerHTML=`  <div >
    <h1>New Book</h1>
</div>

<div class="container2">  
    <div class="title">
        <p>Title</p>
        <input type="text" class="title-library" >
    </div>
    <div class="author">
        <p>Author</p>
        <input type="text"  class="author-library">
    </div>

    <div class="genre">
        <p>Genre</p>
        <input type="text"  class="genre-library">
    </div>

    <div class="year">
        <p>Year</p>
        <input type="text"  class="year-library">

    </div>

    <div class="buttons">
        <button class="new-book">Create New Book</button>
        <button class="cancel-page">Cancel</button>
    </div>


    
</div> `;

//ce vom adauga in impput afiseaza la apasarea create new book
let btnNewBook=document.querySelector(".new-book");

let title=document.querySelector(".title-library");
let author=document.querySelector(".author-library");
let genre=document.querySelector(".genre-library");
let year=document.querySelector(".year-library");

     
  

   // sa afseze cu title: ex,author:ex...

 //cream un nou book
   btnNewBook.addEventListener("click",()=>{

    let  carte={
        title:title.value,
        author: author.value,
        genre:genre.value,
        year:year.value,
    }
       
    
    books.push(carte);

    setHome();
     
   })


   let cancel=document.querySelector(".cancel-page")

//cancel

   cancel.addEventListener("click",()=>{
  

    setHome();

   })

   //daca nu completezi de ex anul sa nu ma lase sa apas new book

   let avertizare=document.querySelector(".cancel-page")

   if(carte.value==0){
    avertizare.addEventListener("click",()=>{
        alert("Lipseste valoarea");
    })
   }

}

function returnObiect(arr,titlu){
    for(let i=0;i<arr.length;i++){
        if(arr[i].titlu==titlu){
            return arr[i];
        }
    } 
    return -1;
}

function updateObiect(arr,obj){
    for(let i=0;i<arr.length;i++){
        if(arr[i].title==obj.title){
            arr[i].author=obj.author;
            arr[i].genre=obj.genre;
            arr[i].year=obj.year;
        }
    }

}

function setUpdate(book){
    let container=document.querySelector(".box");
    container.innerHTML=`
    <div>
            <h1>Update Book</h1>
        </div>

        <div class="container3">
            <div class="title">
                <p>Title</p>
                <input type="text" class="title-book" value="${book.title}">
            </div>

            <div class="author"> 
                <p>Author</p>
                <input type="text" class="author-book" value="${book.author}" >
            </div>

            <div class="genre">
                <p>Genre</p>
                <input type="text" class="genre-book" value="${book.genre}">
            </div>

            <div class="year">
                <p>Year</p>
                <input type="text" class="year-book" value="${book.year}">
            </div>
        <div class="buttons2">
            <button class="update">Update  Book</button>
            <button class="delete">Delete Book</button>
            <button class="cancel">Cancel</button>
        </div>

        </div>
    `
   let btnUpdate=document.querySelector(".update");

   btnUpdate.addEventListener("click",()=>{

    let book = {
  title: "The Yellow Meads of Asphodel",
  author: "Francisca Osinski III",
  genre: "Fable",
  year: 2021,
}

updateObiect(books,book);
setHome();

   })
}


















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
            <button class="sort">Sort</button>
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

    let btnSort=document.querySelector(".sort");
    btnSort.addEventListener("click",()=>{
        sorteaza(books);
        setHome();
    })



}

function sorteaza(arr){
    let s;

    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i].year>arr[j].year){
                s=arr[i];
                arr[i]=arr[j];
                arr[j]=s;
            }
        }
    }

    return arr;
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
        if(arr[i].title==titlu){
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
                <input type="text" class="title-library" value="${book.title}">
            </div>

            <div class="author"> 
                <p>Author</p>
                <input type="text" class="author-library" value="${book.author}" >
            </div>

            <div class="genre">
                <p>Genre</p>
                <input type="text" class="genre-library" value="${book.genre}">
            </div>

            <div class="year">
                <p>Year</p>
                <input type="text" class="year-library" value="${book.year}">
            </div>
        <div class="buttons2">
            <button class="update">Update  Book</button>
            <button class="delete">Delete Book</button>
            <button class="cancel">Cancel</button>
        </div>

        </div>
    `
   let btnUpdate=document.querySelector(".update");
   let title=document.querySelector(".title-library");
   let author=document.querySelector(".author-library");
   let genre=document.querySelector(".genre-library");
   let year=document.querySelector(".year-library");

   btnUpdate.addEventListener("click",()=>{

    let book = {
  title: title.value,
  author: author.value,
  genre: genre.value,
  year: year.value,
};



updateObiect(books,book);
setHome();

   })

   let btnDelete=document.querySelector(".delete");
   btnDelete.addEventListener("click",()=>{

    let book={
        title:title.value,
        author:author.value,
        genre:genre.value,
        year:year.value,

    }

    books=[...stregere(books,book.title)]
    console.log(books);
    setHome();
   });
}

function  stregere(arr,title){
    let nou=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].title!==title){
            nou.push(arr[i]);
        }
    }
    return nou;
}

















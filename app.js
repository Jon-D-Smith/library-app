//DOM Elemet Variables for adding books
const addBtn = document.forms['add-book'];
const title = document.getElementById("book-title");
const author = document.getElementById("author");
//DOM Element Variables for deleting books
const list = document.querySelector("#book-list ul");

//create a papagraph for error
const error = document.createElement('p');
const errorMsg = document.getElementById('errorMsg');

// Functionality for adding a new book
function submitBook(e){
    //prevent the default submit behavior (Reloading the page)
    e.preventDefault();

    //If either field is empty, notify the user then break out of the function
    if (title.value == "" || author.value == "") {
        
        error.textContent = "Please complete the form";
        errorMsg.appendChild(error);
        return;
    }

    //create element
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const authorName = document.createElement('p'); 
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = title.value;
    authorName.textContent = author.value;

    //add styling
    deleteBtn.classList.add('delete');
    bookName.classList.add('name');
    authorName.classList.add('author');

    //append items    
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    li.appendChild(authorName);
    list.appendChild(li);

    

    //reset the field values
    title.value="";
    author.value="";
    errorMsg.textContent = "";
}

function deleteFun(e) {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
}

//Event Listener for adding a new book
addBtn.addEventListener('submit', submitBook);

//Event Listener for the delete buttons
list.addEventListener("click" , deleteFun)



//filtering through the list

const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', function(e){
    const searchValue = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book) {
        const title = book.firstElementChild.textContent
        const author = book.lastElementChild.textContent
        
        if(title.toLowerCase().indexOf(searchValue) != -1 || author.toLowerCase().indexOf(searchValue) != -1 ){
            book.style.display = "block";
            
            
        } else {
            book.style.display = "none";
        }
    })
})





//                Book Object (Will want to use later) -- Leave Commented out for now

// function Book(title, author, pages, has_read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.has_read = has_read;   
// }

// Book.prototype.info = function () {
//     return this.title + " by " + this.author + "-" + this.pages + " " + this.has_read ;
//  }
//  const super_powereds =  new Book("SuperPowereds","Drew Hayes", "lots", "False")
//---------------------------------------------------------------------------------------------------//

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


//DOM Elemet Variables for adding books
const addBtn = document.forms['add-book'];
const title = document.getElementById("book-title");
const bookListItem = document.querySelector('#book-list ul')
//DOM Element Variables for deleting books
const list = document.querySelector("#book-list ul");

//Event Listener for adding a new book
addBtn.addEventListener('submit', function (e){
    //Preventing the page from reloading on submit
    e.preventDefault();
    if(title.value !== "") {
        bookListItem.innerHTML += ("<li><span class='name'> " + title.value + "</span> <span class='delete'>delete</span></li>");
    } else {
        return alert("Please enter a title");
    }
    //Once I hit submit, clear the text
    title.value="";
})

//Event Listener for the delet buttons
list.addEventListener("click" , function(e) {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})




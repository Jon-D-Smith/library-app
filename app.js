function Book(title, author, pages, has_read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.has_read = has_read;

    
}


Book.prototype.info = function () {
    return this.title + " by " + this.author + "-" + this.pages + " " + this.has_read ;
 }
 const super_powereds =  new Book("SuperPowereds","Drew Hayes", "lots", "False")

 console.log(super_powereds.info())

//Appending to the booklist

const bookList = document.querySelector('#book-list');


bookList.innerHTML += super_powereds.title + " by " + super_powereds.author + "-" + super_powereds.pages + " " + super_powereds.has_read;


const addBtn = document.querySelector("#add-book button");

const title = document.getElementById("book-title");

const bookListItem = document.querySelector('#book-list ul')

addBtn.addEventListener('click', function (e){
    e.preventDefault();
    if(title.value !== "") {
        bookListItem.innerHTML += ("<li><span class='name'> " + title.value + "</span> <span class='delete'>delete</span></li>");
    } else {
        return alert("Please enter a title");
    }
    
    title.value="";
})


const list = document.querySelector("#book-list ul");

list.addEventListener("click" , function(e) {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})




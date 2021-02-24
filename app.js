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


const deleteList = document.querySelectorAll('#book-list .delete');

Array.from(deleteList).forEach(function(btn) {

    btn.addEventListener('click', function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)
    })
})

const addBtn = document.querySelector("#add-book button");

const title = document.getElementById("book-title");

addBtn.addEventListener('click', function (e){
    e.preventDefault();
    if(title.value !== "") {
        bookList.innerHTML += ("<li>" + title.value + "</li>");
    } else {
        return alert("Please enter a title");
    }
    
    title.value="";
})
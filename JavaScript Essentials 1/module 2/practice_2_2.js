// Question 1. Create an object that describes a train ticket and store in the ticket variables
// from, to, price

let train_ticket = {
	from: 'Plamondon',
	to: 'Namur',
	price: 3.25
};

console.log(`Ticket from: ${train_ticket.from}`); // 'Ticket from: Plamondon'
console.log(`Ticket to: ${train_ticket.to}`); // 'Ticket to: Namur'
console.log(`Ticket price: ${train_ticket.price}`); // 'Ticket price: 3.25'


// Question 2. Declare an empty object and save it to a person variable. Using
// dot notation, add the name and surname fields to the object by entering your
// data as values. Try to display the individual fields on the console. 

let person = {};
person.name = 'Ross';
person.surname = 'Boquiren';

console.log(`Person's name is: ${person.name}`); // "Person's name is: Ross"
console.log(`Person's surname is: ${person.surname}`); // "Person's surname is: Boquiren"


// Question 3. We are setting up our small library of books about JavaScript programming.
// we have three books and want to prepare a list of them. We will store three pieces
// information about each book: title, author and number of pages/
// Create an array of three objects representing the books. title, author, pages

let books = [
	{
		title: 'Speaking JavaScript',
		author: 'Axel Rauschmayer',
		pages: 460
	},
	{
		title: 'Programming JavaScript Applications',
		author: 'Eric Elliott',
		pages: 254
	},
	{
		title: 'Understanding ECMAScript 6',
		author: 'Nicholas C. Zakas',
		pages: 352
	}

];

// Question 4. Add a new book to the collection: Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. 
// attach the book at the end of the array
// display the length of the array
// display all the book names in the collection

books.push({
	title: 'Learning JavaScript Design Patterns',
	author: 'Addy Osmani',
	pages: 254
});

console.log(books.length); // 4
console.log(`The title of the books are: ${books[0].title}, ${books[1].title}, ${books[2].title}, ${books[3].title}`);
// 'The title of the books are: Speaking JavaScript, Programming JavaScript Applications, Understanding ECMAScript 6, Learning JavaScript Design Patterns'


// Question 5. Use Slice command to copy the last two books to the new array
let book_slice = books.slice(-2);
console.log(book_slice);
/*
[
  {
    title: 'Understanding ECMAScript 6',
    author: 'Nicholas C. Zakas',
    pages: 352
  },
  {
    title: 'Learning JavaScript Design Patterns',
    author: 'Addy Osmani',
    pages: 254
  }
]
*/

// Question 6. Remove the first book from the array
// display the length of the array
// display the names of the books from the remaining collection

books.shift(0);
console.log(books.length); // 3
console.log(`Here are the remaining books in the collection: ${books[0].title}, ${books[1].title}, ${books[2].title}`);

/*
'Here are the remaining books in the collection: Programming JavaScript Applications, 
Understanding ECMAScript 6, Learning JavaScript Design Patterns'
*/

// Question 7. display the sum of the pages of all the books from the collection
let sum_pages = books[0].pages + books[1].pages + books[2].pages; 
console.log(sum_pages); // 860

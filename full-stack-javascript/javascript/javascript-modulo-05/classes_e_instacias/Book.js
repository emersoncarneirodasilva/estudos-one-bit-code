class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
    this.published = false;
  }

  isPlublished() {
    this.published = true;
  }
}

const eragon = new Book("Eragon");
eragon.pages = 468;

const eldest = new Book("Eldest", 466);
eldest.isPlublished();

console.log(eragon);
console.log(eldest);

console.log(eragon instanceof Book);
console.log([eragon, eldest] instanceof Array);

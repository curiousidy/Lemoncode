interface books {
    title: string,
    isRead: boolean
}
const books:books[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

type isReaded = (books:books[], title:string) => boolean

//SOLUCIÓN 1
const isBookRead:isReaded = (books, title)  => books.filter(book => book.isRead)
                                                    .some(book => book.title === title)
  
  console.log(isBookRead(books, "Devastación")); // true
  console.log(isBookRead(books, "Canción de hielo y fuego")); // false
  console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

  //SOLUCIÓN 2
  const isReaded2:isReaded = (books,title) => books.filter(book => book.title === title)
                                            .filter(book => book.isRead).length > 0; 

 //SOLUCIÓN 3
  const isReader3 : isReaded = (books,title) =>
    books.some(book => book.title === title && book.isRead);

  console.log(isReader3(books, "Devastación")); // true
  console.log(isReader3(books, "Canción de hielo y fuego")); // false
  console.log(isReader3(books, "Los Pilares de la Tierra")); // false
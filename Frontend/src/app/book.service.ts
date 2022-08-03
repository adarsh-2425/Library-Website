import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookService {
server_address:string = "api";

  item= {
    bookId:'',
    bookName:'',
    authorName:'',
    imageUrl:'',
    genre:''}
  constructor(private http:HttpClient) { }
  getBook(id:any){
    return this.http.get(`${this.server_address}/`+id);
  }
  getBooks(){
    return this.http.get(`${this.server_address}/books`);
  }
  newBook(item:any)
  {   
    return this.http.post(`${this.server_address}/insert`,{"book":item})
    .subscribe(data =>{console.log(data)})
  }
  editBook(book:any)
  {
    console.log('book update')
    return this.http.put(`${this.server_address}/update`,book)
    .subscribe(data =>{console.log(data)})
  }
  deleteBook(id:any)
  {

    return this.http.delete(`${this.server_address}/remove/`+id)

  }
}

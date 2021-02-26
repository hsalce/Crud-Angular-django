import { Component, OnInit } from '@angular/core';
import { PilotoService } from '../../services/piloto.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  titleModal: string = '';

  listLibro: any = [];

  book = [];

  name: string;
  auth: string;
  editorial: string;

  variable = 0;
  constructor(private service: PilotoService) {
    this.listData();
  }

  ngOnInit() {}

  listData() {
    this.service.getLibro().subscribe(
      (data) => {
        this.listLibro = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async getBook(id) {
    this.variable = 1;
   await this.service.getBook(id).subscribe(
      (data) => {
        console.log(data);
        this.book = data;
        this.titleModal = 'Editar libro';
        this.listData();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async editBook() {
    await this.service.updateLibro(this.book).subscribe(
      (data) => {
        console.log(data);
        this.listData() ;
        this.book = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

 async addBook() {
    let newBook = {
      name: this.name,
      auth: this.auth,
      editorial: this.editorial,
    };
  await  this.service.addLibro(newBook).subscribe(
      (data) => {
        this.titleModal = 'Agregar nuevo libro';
        this.book.push(data);
        this.listData() ;
       
        this.name= "";
        this.auth= "";
        this.editorial= "";
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
 async deleteBook(id) {
   await this.service.deleteLibro(id).subscribe(
      data => {
        this.listData() ;
      },
      error => {
        console.log(error);
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PilotoService {
  readonly Api_url = 'http://localhost:8000/';
  readonly photoUrl = 'http://localhost:8000/libro/';

  headers = new HttpHeaders({ 'content-type': 'application/json' });

  constructor(private http: HttpClient) {}

  getLibro(): Observable<any> {
    return this.http.get<any[]>(this.photoUrl, { headers: this.headers });

    // return this.http.get<any[]>(this.photoUrl +"/otra url/")
  }
  getBook(id): Observable<any> {
    return this.http.get(this.photoUrl  + id + '/', { headers: this.headers });
  }

  updateLibro(book): Observable<any> {
    const json = {
      name: book.name,
      auth: book.auth,
      editorial: book.editorial,
    };
    return this.http.put(this.photoUrl  + book.id + '/' , json, {
      headers: this.headers,
    });
  }

  addLibro(book): Observable<any> {
    const json = {
      name: book.name,
      auth: book.auth,
      editorial: book.editorial,
    };
    return this.http.post(this.photoUrl   , json, {
      headers: this.headers,
    });
  }

  deleteLibro(id) : Observable<any> {
    return this.http.delete(this.photoUrl + id + '/',
    {headers: this.headers});
  }

}

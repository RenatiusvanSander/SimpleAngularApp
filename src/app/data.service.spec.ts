import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { Book } from './model/Book';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('addBook increases the size of books array', () => {
    const book = new Book();
    const service: DataService = TestBed.get(DataService);
    service.addBook(book);
    // fail();
    expect(service.books.length).toEqual(4);
  }); 
});

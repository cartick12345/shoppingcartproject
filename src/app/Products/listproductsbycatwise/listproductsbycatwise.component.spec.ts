import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproductsbycatwiseComponent } from './listproductsbycatwise.component';

describe('ListproductsbycatwiseComponent', () => {
  let component: ListproductsbycatwiseComponent;
  let fixture: ComponentFixture<ListproductsbycatwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListproductsbycatwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListproductsbycatwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleprodectDetailsComponent } from './singleprodect-details.component';

describe('SingleprodectDetailsComponent', () => {
  let component: SingleprodectDetailsComponent;
  let fixture: ComponentFixture<SingleprodectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleprodectDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleprodectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

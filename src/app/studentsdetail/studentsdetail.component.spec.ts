import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsdetailComponent } from './studentsdetail.component';

describe('StudentsdetailComponent', () => {
  let component: StudentsdetailComponent;
  let fixture: ComponentFixture<StudentsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

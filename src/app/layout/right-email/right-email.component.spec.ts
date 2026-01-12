import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightEmailComponent } from './right-email.component';

describe('RightEmailComponent', () => {
  let component: RightEmailComponent;
  let fixture: ComponentFixture<RightEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

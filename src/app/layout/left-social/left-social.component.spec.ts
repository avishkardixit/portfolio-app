import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSocialComponent } from './left-social.component';

describe('LeftSocialComponent', () => {
  let component: LeftSocialComponent;
  let fixture: ComponentFixture<LeftSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

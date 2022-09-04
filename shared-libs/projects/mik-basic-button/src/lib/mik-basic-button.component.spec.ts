import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MikBasicButtonComponent } from './mik-basic-button.component';

describe('MikBasicButtonComponent', () => {
  let component: MikBasicButtonComponent;
  let fixture: ComponentFixture<MikBasicButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MikBasicButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MikBasicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

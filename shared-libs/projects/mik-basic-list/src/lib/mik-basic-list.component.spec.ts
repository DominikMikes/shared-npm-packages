import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MikBasicListComponent } from './mik-basic-list.component';

describe('MikBasicListComponent', () => {
  let component: MikBasicListComponent;
  let fixture: ComponentFixture<MikBasicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MikBasicListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MikBasicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

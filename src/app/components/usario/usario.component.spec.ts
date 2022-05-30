import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsarioComponent } from './usario.component';

describe('UsarioComponent', () => {
  let component: UsarioComponent;
  let fixture: ComponentFixture<UsarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

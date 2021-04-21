import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarScrollerComponent } from './navbar-scroller.component';

describe('NavbarScrollerComponent', () => {
  let component: NavbarScrollerComponent;
  let fixture: ComponentFixture<NavbarScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarScrollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingViewComponent } from './landing-view.component';

describe('LandingViewComponent', () => {
  let component: LandingViewComponent;
  let fixture: ComponentFixture<LandingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

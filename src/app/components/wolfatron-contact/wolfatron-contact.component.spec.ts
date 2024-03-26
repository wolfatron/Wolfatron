import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WolfatronContactComponent } from './wolfatron-contact.component';

describe('WolfatronContactComponent', () => {
  let component: WolfatronContactComponent;
  let fixture: ComponentFixture<WolfatronContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WolfatronContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WolfatronContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

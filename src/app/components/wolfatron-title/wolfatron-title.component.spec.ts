import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WolfatronTitleComponent } from './wolfatron-title.component';

describe('WolfatronTitleComponent', () => {
  let component: WolfatronTitleComponent;
  let fixture: ComponentFixture<WolfatronTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WolfatronTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WolfatronTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

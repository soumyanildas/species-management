import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertConfigurationComponent } from './alert-configuration.component';

describe('AlertConfigurationComponent', () => {
  let component: AlertConfigurationComponent;
  let fixture: ComponentFixture<AlertConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertConfigurationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

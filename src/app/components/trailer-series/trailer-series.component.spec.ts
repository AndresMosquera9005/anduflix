import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerSeriesComponent } from './trailer-series.component';

describe('TrailerSeriesComponent', () => {
  let component: TrailerSeriesComponent;
  let fixture: ComponentFixture<TrailerSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailerSeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailerSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

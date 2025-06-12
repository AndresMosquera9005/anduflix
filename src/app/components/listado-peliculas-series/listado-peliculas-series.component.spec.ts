import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPeliculasSeriesComponent } from './listado-peliculas-series.component';

describe('ListadoPeliculasSeriesComponent', () => {
  let component: ListadoPeliculasSeriesComponent;
  let fixture: ComponentFixture<ListadoPeliculasSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoPeliculasSeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPeliculasSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

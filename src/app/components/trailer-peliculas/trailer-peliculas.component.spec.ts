import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerPeliculasComponent } from './trailer-peliculas.component';

describe('TrailerPeliculasComponent', () => {
  let component: TrailerPeliculasComponent;
  let fixture: ComponentFixture<TrailerPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailerPeliculasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailerPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

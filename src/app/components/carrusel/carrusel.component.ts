import { NgIf } from '@angular/common';
import { AfterContentInit, Component, ContentChildren, Input, NgModule, OnDestroy, QueryList } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  standalone: true,
  styleUrl: './carrusel.component.css',
  // imports: [CarruselComponent]
})

// @NgModule({
//   imports:[CarruselComponent]
// })

export class CarruselComponent implements AfterContentInit, OnDestroy {
  @Input() interval: number = 3000; 
  @Input() showControls: boolean = true;
  @Input() showIndicators: boolean = true;


  @ContentChildren('slide') slides!: QueryList<any>;

  currentIndex: number = 0;
  private timer: any;

  ngAfterContentInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoSlide(): void {
    this.stopAutoPlay();
    if (this.interval > 0 && this.slides && this.slides.length > 1) {
      this.timer = setInterval(() => {
        this.nextSlide();
      }, this.interval);
    }
  }

  stopAutoPlay(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  nextSlide(): void {
    if (this.slides && this.slides.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }
  }

  prevSlide(): void {
    if (this.slides && this.slides.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.stopAutoPlay(); // Detener auto-play al navegar manualmente
    this.startAutoPlay()
    }
  startAutoPlay() {
    throw new Error('Method not implemented.');
  }
  }


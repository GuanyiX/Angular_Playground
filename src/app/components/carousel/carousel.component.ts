import {
  animate,
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  style,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Directive({
  selector: '.carousel-item',
})
export class CarouselItemElement {}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {

  @ViewChildren('carouselItem', { read: ElementRef })
  private itemsElements!: QueryList<ElementRef>;

  carouselWrapperStyle = {};

  @ViewChild('carousel') private carousel!: ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  private player!: AnimationPlayer;
  private itemWidth!: number;
  currentSlide: number = 0;
  currentDot: number = 0;

  linkList = [
    "assets/cute-dog-headshot.jpeg",
    "assets/golder-retriever-puppy.jpeg",
    "assets/test1.jpeg"
  ]

  constructor(private builder: AnimationBuilder) {}

  ngOnInit(): void {}

  private buildAnimation(offset: number, time: any) {
    return this.builder.build([
      animate(time == null ? this.timing : 0, style({ transform: `translateX(-${offset}px)` }))
    ]);
  }

  ngAfterViewInit() {
    this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
    this.carouselWrapperStyle = {
      width: `${this.itemWidth}px`,
    };
  }

  next() {
    this.currentDot = (this.currentDot + 1) % this.linkList.length;
    if (this.currentSlide + 1 === this.linkList.length) {
      let first = this.linkList.shift();
      let newLinkList = first ? [
        ...this.linkList,
        first 
      ] : this.linkList

      this.linkList = newLinkList;
      this.currentSlide--;
      this.transitionCarousel(0);
    }
    this.currentSlide = (this.currentSlide + 1) % this.linkList.length;
    this.transitionCarousel(null);
  }

  prev() {
    this.currentDot = (this.currentDot - 1 + this.linkList.length) % this.linkList.length;
    if (this.currentSlide === 0) {
      let last = this.linkList.pop();
      let newLinkList = last ? [
        last,
        ...this.linkList
      ] : this.linkList

      this.linkList = newLinkList;
      this.currentSlide++;
      this.transitionCarousel(0);
    }
    this.currentSlide = (this.currentSlide - 1 + this.linkList.length) % this.linkList.length;
    this.transitionCarousel(null);
  }

  transitionCarousel(time: any) {
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset, time);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }
}

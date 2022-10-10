import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from "@angular/core";
import { fromEvent, Subject, takeUntil } from "rxjs";

@Component({
    selector: 'portfolio-carousel',
    templateUrl: './portfolio-carousel.component.html',
    styleUrls: ['./portfolio-carousel.component.scss']
})

export class PortfolioCarouselComponent implements AfterViewInit, OnDestroy {

    constructor(private breakpointObserver: BreakpointObserver) {}
    subs = new Subject<void>();

    @Input() set images(images: string[]) {
        if(!images || !images?.length) return;
        this._images = images;
    }
    _images!: string[];

    @ViewChild('slider') slider!: ElementRef;

    screenObserver() {
        this.breakpointObserver
          .observe(['(min-width: 745px)'])
          .pipe(takeUntil(this.subs))
          .subscribe((state: BreakpointState) => {
          });
      }

    itemCount = 3;
    sliderPosition = 0;
    currentSlide = 0;

    ngAfterViewInit(): void {
        this.onResize();
    }

    onClickNext() {
        this.scroll('right');
    }

    onClickPrev() {
        this.scroll('left');
    }

    scroll(direction: string) {
        const slider = this.slider.nativeElement as HTMLElement;
        const sliderWidth = slider.scrollWidth - slider.offsetWidth;
        
        const slides = this.slider.nativeElement.children;
        const itemWidth = slides[0].offsetWidth + 15;
        console.log(this.sliderPosition);

        if(direction == 'right') {
            // if(this.sliderPosition + itemWidth >= sliderWidth) {
            //     // this.sliderPosition = sliderWidth
            //     this.sliderPosition = 
            // } else {
            //     // this.sliderPosition += itemWidth;
            // }
            if(this.currentSlide != slider.children.length - 1) this.currentSlide += 1;
            console.log(this.currentSlide)
            const scrollWidth = this.currentSlide * itemWidth;
            slider.scrollTo({left: scrollWidth})
        }

        if(direction == 'left') {
            if(this.currentSlide != 0) this.currentSlide -= 1;
            
            const scrollWidth = this.currentSlide * itemWidth;
            slider.scrollTo({left: scrollWidth})
        }
    }

    onResize() {
        const resize = fromEvent(window, 'resize');
        resize.subscribe(() => {
            // const slides = this.wrapper.nativeElement.children;
            // this.itemWidth = slides[0].offsetWidth;
        //     const wrapperWidth = this.wrapper.nativeElement.offsetWidth;
        //     console.log('width', wrapperWidth)
        //     this.itemWidth = wrapperWidth / this.itemCount;
        //     console.log('Item Width', this.itemWidth)
        //     const items = this.wrapper.nativeElement.children;
        //     for(let item of items) {
        //         item.style.width = `${this.itemWidth}px`;
        //         item.style.minWidth = `${this.itemWidth}px`;
            // }
        })
    }

    itemsOnScreen(quantity: number) {

    }

    ngOnDestroy(): void {
        this.subs.next();
        this.subs.complete();
    }

}
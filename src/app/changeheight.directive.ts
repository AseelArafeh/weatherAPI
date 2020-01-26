import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeHeight]'
})
export class ChangeheightDirective {

    constructor(private el: ElementRef) {
       el.nativeElement.style.height = '100px';
    }

    @HostListener('window:scroll') heightChanging(event) {

		if (window.pageYOffset == 0)
			this.changeHeight('100px');
		else
			this.changeHeight('62px');

    }

    private changeHeight(height: string) {

      this.el.nativeElement.style.height = height;

    }

}

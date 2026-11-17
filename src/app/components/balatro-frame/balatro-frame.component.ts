import { Component, computed, Directive, effect, ElementRef, HostListener, inject, signal } from "@angular/core";


@Component({
    selector: "balatro-frame",
    template: `
        <div id="shadow">
             <ng-content select="[shadow]"></ng-content>
        </div>       
        <div id="anim" [style.transform]='transform()'>
            <ng-content></ng-content>
        </div>
        
        `,
    styleUrl: "balatro-frame.component.css"
})
export class BalatroFrameComponent {

    private element = inject<ElementRef<HTMLDivElement>>(ElementRef).nativeElement

    private weight = signal<number>(0)
    private x = signal<number>(0)
    private y = signal<number>(0)
    
    transform = computed(() => {
        return "rotate3d(" + this.y() + ", " +this.x() + ", 0, " + this.weight() + "deg)";
    })

    @HostListener("mousemove", ["$event"])
    mouseMove(event: MouseEvent){

        let x = event.offsetX - this.element.clientWidth/2
        let y = event.offsetY - this.element.clientHeight/2

        const weight = Math.hypot(x, y) / Math.hypot(this.element.clientHeight, this.element.clientWidth) *2

        x /= this.element.clientWidth/2
        y /= this.element.clientHeight/2
        
        this.weight.set(weight*25)
        this.x.set(x)
        this.y.set(-y)
    }

    @HostListener("mouseleave")
    mouseLeave(){
        this.weight.set(0)
        this.x.set(0)
        this.y.set(0)
    }
}
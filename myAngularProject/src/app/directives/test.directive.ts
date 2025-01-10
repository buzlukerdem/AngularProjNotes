import { Directive, input, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTest]',
  standalone: false
})
export class TestDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  // ngIf alternatif
  // @Input() set appTest(value: boolean) {
  //   if (value) 
  //   {
  //     this.viewContainerRef.createEmbeddedView(this.templateRef)
  //   }
  //   else
  //   {
  //     this.viewContainerRef.clear()
  //   }
  // }
  // ngFor alternatif
  // @Input() set appTest(value:number){
  //   for(let i = 0; i < value; i++){
  //     this.viewContainerRef.createEmbeddedView(this.templateRef)
  //   }
  // }

  //daha gelişmişi implicit ile
  // @Input() set appTest(value:number){
  //   for(let i = 1; i <= value; i++){
  //     this.viewContainerRef.createEmbeddedView(this.templateRef,{
  //       $implicit: `${i}`
  //     });
  //   }
  // }

  //Array ile
  // @Input() set appTest(value: string[]) {
  //   for (let i = 0; i < value.length; i++) {
  //     this.viewContainerRef.createEmbeddedView(this.templateRef, {
  //       $implicit: value[i],
  //       index: i
  //     });
  //   }
  // }

}

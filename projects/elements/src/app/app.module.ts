import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { ComponentModule, ComponentComponent } from "component";

@NgModule({
  imports: [BrowserModule, ComponentModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(ComponentComponent, {
      injector: this.injector,
    });
    if (!customElements.get('lib-component')) {
      customElements.define("lib-component", element);
    }
  }
}

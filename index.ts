import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './src/components/hello-world.component';

@NgModule({
    declarations: [HelloWorldComponent],
    exports: [HelloWorldComponent]
})
export class WebpackLibModule {
}

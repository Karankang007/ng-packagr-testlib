import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestLabelComponent } from './label.component';

@NgModule({
    declarations: [
        TestLabelComponent
    ],
    imports: [ CommonModule ],
    exports: [
        TestLabelComponent
    ]
})
export class TestLabelModule {}
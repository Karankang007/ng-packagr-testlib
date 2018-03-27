import { Component, Input } from '@angular/core';

@Component({
    selector: 'test-label',
    templateUrl: './label.component.html'
})
export class TestLabelComponent {
    @Input()
    public text: string;

    @Input()
    public value: string;
}
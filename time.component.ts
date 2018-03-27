import { Component } from '@angular/core';

@Component({
    selector: 'test-time',
    templateUrl: './time.component.html'
})
export class TestTimeComponent {
    public get currentTime() {
        return new Date();
    }
}
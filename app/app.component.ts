import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: ``
})
export class AppComponent {
    title: string;
    constructor() {
        this.title = 'ultimate angular';
    }
}
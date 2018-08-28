import {Component} from "@angular/core";

@Component({
    selector: "event-calendar-app",
    styles: [ require("./app.component.scss") ],
    template: require("./app.component.html")
})
export class EventCalendarComponent {
    message = "Event Calendar!"
}

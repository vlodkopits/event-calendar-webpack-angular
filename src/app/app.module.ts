import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {EventCalendarComponent} from "./app.component";

@NgModule({
    bootstrap:    [EventCalendarComponent],
    declarations: [EventCalendarComponent],
    imports:      [BrowserModule, FormsModule ],
})
export class AppModule {}

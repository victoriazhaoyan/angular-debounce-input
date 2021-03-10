import { Component, VERSION } from "@angular/core";
import { debounceTime } from "rxjs/internal/operators/debounceTime";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { Subject } from "rxjs/internal/Subject";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public consoleMessages: string[] = [];
  public userQuestion: string;
  userQuestionUpdate = new Subject<string>();
  color = "blue";

  constructor() {
    // Debounce search.
    this.userQuestionUpdate
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.consoleMessages.push(value);
      });
  }
}

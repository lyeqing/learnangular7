import { Component } from "@angular/core";
import { BasicBrick } from "./models/BasicBrick";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = new BasicBrick(
    "Welcome to Guide for Chinese Reader",
    "歡迎囯人在澳洲"
  );
  constructor() {
    // this.changeTitle("sdgfdsg222222fdag");
  }
  changeLanguagetoEnglish() {
    BasicBrick.languageSelection = 1;
    console.log("here 2");
  }
  changeLanguagetoChinese() {
    console.log("here 1");
    BasicBrick.languageSelection = 2;
    console.log("here 2");
  }
  changeLanguagetoBoth() {
    BasicBrick.languageSelection = 3;
    console.log("here 2");
  }
  // changeTitle(fghfgfgh: string) {
  //   this.title = fghfgfgh;
  // }
}

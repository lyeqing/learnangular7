export class BasicBrick {
  english: string;
  chinese: string;
  static languageSelection: number = 1;
  constructor(english: string, chinese: string) {
    this.english = english;
    this.chinese = chinese;
  }
  getEnglish() {
    return this.english;
  }
  getChinese() {
    return this.chinese;
  }
  getBoth() {
    return this.english + "\n" + this.chinese;
  }
  getTheOne() {
    switch (BasicBrick.languageSelection) {
      case 1:
        return this.getEnglish();
        break;
      case 2:
        return this.getChinese();
        break;
      case 3:
        return this.getBoth();
        break;
      default:
        return this.getBoth();
    }
  }
}

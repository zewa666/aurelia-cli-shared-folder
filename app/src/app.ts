import { DemoModel, guid } from "shared/index";

export class App {
  public person: DemoModel;

  attached() {
    this.person = {
      firstName: "John",
      lastName: "Rambo",
      id: guid()
    };
  }
}

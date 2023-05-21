import { Component, ViewChild } from "@angular/core";
import {
  NgxSignaturePadComponent,
  SignaturePadOptions
  } from "@o.krucheniuk/ngx-signature-pad";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("testPad", { static: true })
  signaturePadElement: NgxSignaturePadComponent;

  config: SignaturePadOptions = {
    minWidth: 1,
    maxWidth: 10,
    penColor: "blue"
  };

  public clear() {
    this.signaturePadElement.clear();
  }

  public getImage() {
    console.log(this.signaturePadElement.toDataURL());
  }

  public changeConfig() {
    this.config.penColor = Math.random() >= 0.5 ? "black" : "red";
    this.config.maxWidth = Math.random() * 10;
    this.config = Object.assign({}, this.config);
  }

  public isInValid(): boolean {
    return !(this.signaturePadElement && !this.signaturePadElement.isEmpty());
  }

  public forceReload() {
    this.signaturePadElement.forceUpdate();
  }
}

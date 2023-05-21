import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgxSignaturePadModule } from "@o.krucheniuk/ngx-signature-pad";

@NgModule({
  imports: [BrowserModule, NgxSignaturePadModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

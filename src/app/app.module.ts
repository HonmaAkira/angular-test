import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  declarations: [AppComponent, HelloComponent, FormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

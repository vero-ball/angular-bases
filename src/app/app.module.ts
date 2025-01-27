import { CounterComponent } from './counter/components/counter.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CounterComponent } from "./counter/components/counter/CounterComponent";
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterComponent,
    CounterModule,
    HeroesModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

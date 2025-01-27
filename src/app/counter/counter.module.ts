import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter.component";

@NgModule({
  imports: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}

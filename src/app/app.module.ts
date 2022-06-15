import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//App Modules and components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//ngRx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

//Store App
import { CarEffects } from './store/effects/car.effects';
import { carReducer } from './store/reducers/car.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      cars: carReducer
    }),
    EffectsModule.forRoot([CarEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

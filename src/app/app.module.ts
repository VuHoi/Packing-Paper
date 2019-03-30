import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { SlideComponent } from './slide/slide.component';
import { CommitmentComponent } from './commitment/commitment.component';
import { CollapseModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    CommitmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

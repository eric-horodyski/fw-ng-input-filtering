import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
  ],
})
export class HomePageModule {}

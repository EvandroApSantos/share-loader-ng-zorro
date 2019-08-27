import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NZ_I18N, NzNotificationService, pt_BR } from 'ng-zorro-antd';
import pt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { APP_STATES } from './app.states';
import { App1Component } from './app1.component';
import { SelectComponent } from './select.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData((<any>pt).default, 'pt');

@NgModule({
  imports: [BrowserAnimationsModule, ReactiveFormsModule, RouterModule.forRoot(APP_STATES), NgZorroAntdModule],
  declarations: [AppComponent, SelectComponent, App1Component],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

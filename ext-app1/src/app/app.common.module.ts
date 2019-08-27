import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NZ_I18N, NzNotificationService, pt_BR } from 'ng-zorro-antd';

import { ExtComponent } from './ext.component';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule, NgZorroAntdModule],
  declarations: [ExtComponent, WelcomeComponent],
  bootstrap: [],
  entryComponents: [],
  providers: [],
  exports: [ExtComponent, WelcomeComponent]
})

export class AppCommonModule { }

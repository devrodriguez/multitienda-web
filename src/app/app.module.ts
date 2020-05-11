import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Own components
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { AuthComponent } from './components/auth/auth.component';
import { CategoryItemsComponent } from './components/category-items/category-items.component';
import { RegisterCustomerComponent } from './components/register-customer/register-customer.component';
import { RegisterStoreComponent } from './components/register-store/register-store.component';
import { StoreItemsComponent } from './components/store-items/store-items.component';
import { FooterComponent } from './components/footer/footer.component';

// Social login
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';

// Angular Material


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("944280994375-11rfd3spalibjkg8g2nunvj9rqi34550.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2794586083924477")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    AuthComponent,
    CategoryItemsComponent,
    StoreItemsComponent,
    FooterComponent,
    RegisterStoreComponent,
    RegisterCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    SocialLoginModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

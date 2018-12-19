import { LOCALE_ID } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UiModule } from './ui/ui.module';
import { BrowserModule } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent],
        imports: [
          BrowserModule,
          LoginModule,
          UiModule,
          NgbModule.forRoot(),
          AppRoutingModule
      ],
      providers: [ { provide: LOCALE_ID, useValue: 'fr' }],
    }).compileComponents();
  }));

  // Chaque it = un test unitaire
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  // Test devenu inutile

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges(); // permet de détecter que des variable schangent de valeur après le constructeur
  //   const compiled = fixture.debugElement.nativeElement; // nativeElement : récup un élément natif dans le dom
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to form-angular!');
  // });
});

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

describe('AppComponent', () => {
  const items = ['item1', 'item2', 'item3'];
  beforeEach(async () => {
    const spy = jasmine.createSpyObj('AppService', ['getList']);
    spy.getList.and.returnValue(of(items));
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AppService, useValue: spy }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularTesting'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularTesting');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(' Welcome to AngularTesting');
  });

  it('should render list when getList() work properly', () => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const elements = compiled.querySelector('ul')
    .querySelectorAll('li');

    items.forEach((item, index) => {
      expect(elements[index].textContent === item);
    });
  });
});

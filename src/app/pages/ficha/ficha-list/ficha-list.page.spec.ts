import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FichaListPage } from './ficha-list.page';

describe('FichaListPage', () => {
  let component: FichaListPage;
  let fixture: ComponentFixture<FichaListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FichaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

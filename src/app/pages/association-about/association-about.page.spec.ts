import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssociationAboutPage } from './association-about.page';

describe('AssociationAboutPage', () => {
  let component: AssociationAboutPage;
  let fixture: ComponentFixture<AssociationAboutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationAboutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssociationAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

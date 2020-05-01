import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortcoinsListComponent } from './portcoins-list.component';

describe('PortcoinsListComponent', () => {
  let component: PortcoinsListComponent;
  let fixture: ComponentFixture<PortcoinsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortcoinsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortcoinsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProvinciaPage } from './provincia.page';

describe('ProvinciaPage', () => {
  let component: ProvinciaPage;
  let fixture: ComponentFixture<ProvinciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProvinciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

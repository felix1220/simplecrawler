import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlerHomeComponent } from './crawler-home.component';

describe('CrawlerHomeComponent', () => {
  let component: CrawlerHomeComponent;
  let fixture: ComponentFixture<CrawlerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

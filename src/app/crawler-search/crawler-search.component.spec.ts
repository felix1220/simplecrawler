import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlerSearchComponent } from './crawler-search.component';

describe('CrawlerSearchComponent', () => {
  let component: CrawlerSearchComponent;
  let fixture: ComponentFixture<CrawlerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

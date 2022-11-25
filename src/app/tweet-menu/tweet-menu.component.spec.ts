import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetMenuComponent } from './tweet-menu.component';

describe('TweetMenuComponent', () => {
  let component: TweetMenuComponent;
  let fixture: ComponentFixture<TweetMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TweetMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

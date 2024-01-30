import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingReciclajeComponent } from './ranking-reciclaje.component';

describe('RankingReciclajeComponent', () => {
  let component: RankingReciclajeComponent;
  let fixture: ComponentFixture<RankingReciclajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RankingReciclajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RankingReciclajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

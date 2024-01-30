import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingFrutaComponent } from './ranking-fruta.component';

describe('RankingFrutaComponent', () => {
  let component: RankingFrutaComponent;
  let fixture: ComponentFixture<RankingFrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RankingFrutaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RankingFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

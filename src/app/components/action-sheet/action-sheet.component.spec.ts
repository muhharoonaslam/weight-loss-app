import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSheetComponent } from './action-sheet.component';

describe('ActionSheetComponent', () => {
  let component: ActionSheetComponent;
  let fixture: ComponentFixture<ActionSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

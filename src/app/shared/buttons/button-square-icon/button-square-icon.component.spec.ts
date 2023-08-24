import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonSquareIconComponent } from "./button-square-icon.component";

describe("ButtonSquareIconComponent", () => {
  let component: ButtonSquareIconComponent;
  let fixture: ComponentFixture<ButtonSquareIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSquareIconComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonSquareIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

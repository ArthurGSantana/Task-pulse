import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonRoundIconComponent } from "./button-round-icon.component";

describe("ButtonRoundIconComponent", () => {
  let component: ButtonRoundIconComponent;
  let fixture: ComponentFixture<ButtonRoundIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonRoundIconComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonRoundIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

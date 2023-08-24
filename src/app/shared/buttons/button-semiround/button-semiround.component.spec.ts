import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonSemiroundComponent } from "./button-semiround.component";

describe("ButtonSemiroundComponent", () => {
  let component: ButtonSemiroundComponent;
  let fixture: ComponentFixture<ButtonSemiroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSemiroundComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonSemiroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

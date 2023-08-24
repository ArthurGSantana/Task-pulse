import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BoxTeamComponent } from "./box-team.component";

describe("BoxTeamComponent", () => {
  let component: BoxTeamComponent;
  let fixture: ComponentFixture<BoxTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxTeamComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BoxTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

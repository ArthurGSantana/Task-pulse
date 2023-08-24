import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CompletionBarComponent } from "./completion-bar.component";

describe("CompletionBarComponent", () => {
  let component: CompletionBarComponent;
  let fixture: ComponentFixture<CompletionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletionBarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CompletionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import { TimerComponent } from './timer.component';


describe('TimerComponent', () => {
  let component: TimerComponent;

  beforeEach(async () => {
    component = new TimerComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

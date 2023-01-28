import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  @Input() minute!: number; 
  display: any;
  public timerInterval: any;

  start() {
    this.timer();
  }
  stop() {
    clearInterval(this.timerInterval);
  }

  timer() {
    // let minute = 1;
    let seconds: number = this.minute * 60;
    let textSec: any = '0';
    let statSec: number = 60;

    const prefix = this.minute < 10 ? '0' : '';

    this.timerInterval = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = '0' + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log('finished');
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

}

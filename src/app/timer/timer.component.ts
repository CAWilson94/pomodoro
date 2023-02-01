import { Component } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  
  minute: number = 25; // default to full pomodoro
  rounds: number = 0;
  display: any;

  newTimer(minute: number) {
    this.stop();
    this.minute = minute;
    this.start();
  }

  public timerInterval: any;

  start() {
    this.stop();
    this.timer();
  }

  stop() {
    clearInterval(this.timerInterval);
  }

  timer() {
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
        console.log('finished, number of rounds - ' + this.rounds);
        this.stop();
      }
    }, 1000);
  }

}

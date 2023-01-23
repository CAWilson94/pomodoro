import { Component } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent {

  timer: string = "not started yet";

  toggleTimer(){ 
    console.log("Hello");
    this.startCountdown(1000);
  }

  startCountdown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
      counter--;

      if (counter < 0) {
        clearInterval(interval);
        console.log('Ding!');
      }
    }, 1000);
  }
}

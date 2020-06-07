import { Component, OnInit } from '@angular/core';
import { Service } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
    public launchTime;
    public missionName;
    public flinghtNumber;

    constructor(public service: Service) {}

    ngOnInit(): void {
        setInterval(() => {
            this.getlaunchTimeTime();
        }, 1000);
    }

    getlaunchTimeTime() {
        return this.service.GetLunchTime().subscribe(res => {
            this.launchTime = res.launch_date_utc;
            this.missionName = res.mission_name;
            this.flinghtNumber = res.flight_number;
            this.launchTime = new Date(this.launchTime);
            this.convertTime(this.launchTime);
        });
    }

    convertTime(time) {
        var now = new Date().getTime();
        var distance = time - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.launchTime  = days + 'd ' + hours + 'h '
        + minutes + 'm ' + seconds + 's';
    }
}

import { Component, OnInit } from '@angular/core';
import { LogService } from '../helpers/log.service';
import { Log } from '../shared/models/log';
import { Workout } from '../shared/models/workout';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  log = '';
  displayedColumns: string[] = ['Logs'];
  displayedColumnsFooter: string[] = this.displayedColumns;
  dataSource;

  constructor(private logService: LogService) {
    this.refresh();
  }

  ngOnInit(): void {
    document
      .addEventListener('keyup', function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById('addButton').click();
        }
      });
  }

  refresh() {
    this.logService.getLogs().subscribe((logs: Log[]) => {
      this.dataSource = logs;
    });
  }

  addLog() {
    if (this.log) {
      this.logService.addLog(this.log).subscribe(() => {
        this.refresh();
        this.log = '';
      });
    }
  }
}

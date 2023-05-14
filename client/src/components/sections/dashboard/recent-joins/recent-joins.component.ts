import { Student } from '@/server/types/api';
import { ApiService } from '@/services/api/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-joins',
  templateUrl: './recent-joins.component.html',
})
export class RecentJoinsComponent {
  students: Student[] = [];

  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.get('students').subscribe((data: any) => {
      if (data.errors) {
        console.log('Error');
        return;
      }

      this.students = (data as Student[]).slice(0, 5);
    });
  }
  getFormat(timestamp: string) {
    const secondsAgo = Math.round(
      (new Date().getTime() - new Date(timestamp).getTime()) / 1000
    );

    if (secondsAgo < 60) return `${this.getFixed(secondsAgo)} seconds ago`;

    if (secondsAgo < 60 * 60)
      return `${this.getFixed(secondsAgo / 60)} minutes ago`;

    if (secondsAgo < 60 * 60 * 24)
      return `${this.getFixed(secondsAgo / (60 * 60))} hours ago`;

    return `${this.getFixed(secondsAgo / (60 * 60 * 24))} days ago`;
  }

  getFixed(num: number) {
    return num.toFixed(0);
  }
}

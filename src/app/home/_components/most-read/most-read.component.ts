import { Component, OnInit } from '@angular/core';
import { ResumedPostService } from '../../_services/resumed-post.service';
import { ResumedPost } from '../../_models/Models';

@Component({
  selector: 'app-most-read',
  templateUrl: './most-read.component.html',
  styleUrls: ['./most-read.component.css']
})
export class MostReadComponent implements OnInit {
  mostRead!: ResumedPost[];

  constructor(private resumedPostService: ResumedPostService) { }

  ngOnInit(): void {
    this.mostRead = this.resumedPostService.getMostReadPosts();
  }

}

import { Component, OnInit } from '@angular/core';
import { ResumedPost } from '../../_models/Models';
import { ResumedPostService } from '../../_services/resumed-post.service';

@Component({
  selector: 'app-united-states',
  templateUrl: './united-states.component.html',
  styleUrls: ['./united-states.component.css']
})
export class UnitedStatesComponent implements OnInit {
  post!: ResumedPost;

  constructor(private resumedPostService: ResumedPostService) { }

  ngOnInit(): void {
    this.post = this.resumedPostService.getUnitedStates();
  }

}

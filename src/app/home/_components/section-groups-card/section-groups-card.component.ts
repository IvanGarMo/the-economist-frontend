import { Component, OnInit, Input } from '@angular/core';
import { ResumedPost, Section } from '../../_models/Models';
import { ResumedPostService } from '../../_services/resumed-post.service';

@Component({
  selector: 'app-section-groups-card',
  templateUrl: './section-groups-card.component.html',
  styleUrls: ['./section-groups-card.component.css']
})
export class SectionGroupsCardComponent implements OnInit {
  @Input('section') section!: Section;
  posts!: ResumedPost[];

  constructor(private resumedPostService : ResumedPostService) { }

  ngOnInit(): void {
    
  }

}

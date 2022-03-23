import { Component, OnInit } from '@angular/core';
import { Section } from '../../_models/Models';
import { SectionService } from '../../_services/section.service';

@Component({
  selector: 'app-section-groups',
  templateUrl: './section-groups.component.html',
  styleUrls: ['./section-groups.component.css']
})
export class SectionGroupsComponent implements OnInit {
  sections!: Section[];

  constructor(private sectionService: SectionService) { }

  ngOnInit(): void {
    this.sections = this.sectionService.loadSectionsFrontPage();
  }
}

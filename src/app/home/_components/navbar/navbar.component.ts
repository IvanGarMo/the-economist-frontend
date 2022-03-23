import { Component, OnInit } from '@angular/core';
import { SectionService } from '../../_services/section.service';
import { Featured, Section } from '../../_models/Models';
import { FeaturedService } from '../../_services/featured.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sections: Section[] = [];
  featured: Featured[] = [];

  constructor(private sectionService: SectionService, 
    private featuredService: FeaturedService) { }

  ngOnInit(): void {
    console.log("onInit: ");
    console.log("Voy a cargar las secciones");
    this.sectionService.loadSections().subscribe(sections => {
      console.log("Secciones cargadas");
      this.sections = sections;
      sections.forEach(s => {
        console.log(JSON.stringify(s));
      });
    });

    console.log("Voy a cargar las featured");
    this.featuredService.loadFeatured().subscribe(featured => {
      this.featured = featured;
      featured.forEach(f => {
        console.log(JSON.stringify(f));
      });
    });
  }

}

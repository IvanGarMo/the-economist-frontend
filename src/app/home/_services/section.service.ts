import { Injectable } from '@angular/core';
import { Section } from '../_models/Models';
import { HttpClient } from '@angular/common/http';
import { sections } from '../_dataMock/DataPost';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private url: string = "http://localhost:8080/sections";

  constructor(private http: HttpClient) { }

  loadSectionsFrontPage(): Section[] {
    return sections;
  }

  loadSections() {
    return this.http.get<Array<Section>>(this.url); 
  }

  postSections(section: Section) {
    return this.http.post<Section>(this.url, section);
  }

  loadSection(idSection: number) {
    let urlEspecial = this.url + "/" + idSection;
    return this.http.get<Section>(urlEspecial);
  }

}

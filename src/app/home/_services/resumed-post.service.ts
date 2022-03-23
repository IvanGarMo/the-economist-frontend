import { Injectable } from '@angular/core';
import { Featured, FeaturedPost, ResumedPost } from '../_models/Models';
import { featuredPost, resumedPosts, mostRead, unitedStates } from '../_dataMock/DataPost';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumedPostService {

  constructor() { }

  getFeaturedPost() : FeaturedPost {
    return featuredPost;
  }

  getResumedPosts() : ResumedPost[] {
    return resumedPosts;
  }

  getMostReadPosts(): ResumedPost[] {
    return mostRead;
  }

  getUnitedStates(): ResumedPost {
    return unitedStates;
  }
}

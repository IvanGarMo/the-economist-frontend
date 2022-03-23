import { Component, OnInit } from '@angular/core';
import { ResumedPost, FeaturedPost } from '../../_models/Models';
import { ResumedPostService } from '../../_services/resumed-post.service';

@Component({
  selector: 'app-weekly-edition',
  templateUrl: './weekly-edition.component.html',
  styleUrls: ['./weekly-edition.component.css']
})
export class WeeklyEditionComponent implements OnInit {
  posts: ResumedPost[];
  featuredPost: FeaturedPost;

  constructor(private resumedPostService: ResumedPostService) {
    this.featuredPost = this.resumedPostService.getFeaturedPost();
    this.posts = this.resumedPostService.getResumedPosts();
   }

  ngOnInit(): void {
  }

}

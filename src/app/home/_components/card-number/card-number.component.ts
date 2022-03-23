import { Component, OnInit, Input } from '@angular/core';
import { ResumedPost } from '../../_models/Models';

@Component({
  selector: 'app-card-number',
  templateUrl: './card-number.component.html',
  styleUrls: ['./card-number.component.css']
})
export class CardNumberComponent implements OnInit {
  @Input('post') resumedPost!: ResumedPost;
  @Input('number') numberPost!: number;

  constructor() { }

  ngOnInit(): void {
  }

}

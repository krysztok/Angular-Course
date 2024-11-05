import { Component, inject, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { Comments } from './comments';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs';

@Component({
  selector: 'hinv-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit{

  commentService = inject(CommentService);
  comments$ = this.commentService.getComments();

  activatedRoute = inject(ActivatedRoute);

  comments2$ = this.activatedRoute.data.pipe(pluck('comments')); //preloading with guard resolve

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => console.log(data));
  }


}

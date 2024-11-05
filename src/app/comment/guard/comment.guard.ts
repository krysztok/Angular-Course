import { ActivatedRouteSnapshot, CanActivateFn, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';
import { Comments } from '../comments';
import { CommentService } from '../comment.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentGuard implements Resolve<Comments[]>{

  constructor(private commentService: CommentService) {

  }

  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): MaybeAsync<Comments[]> | Promise<Comments[]> | Comments[]{
    
      return this.commentService.getComments();
  }


}

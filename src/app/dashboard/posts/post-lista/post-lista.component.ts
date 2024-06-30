import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { PostService } from '../post.service';
import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-post-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './post-lista.component.html',
  styleUrl: './post-lista.component.css'
})
export class PostListaComponent {
  displayedColumns: string[] = ['id', 'userId', 'title', 'body'];
  //dataSource = ELEMENT_DATA;
  posts: Post[] = []

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit(): void {
    this.postService.getAllPosts()
    .subscribe((data) => {
      console.log(data);
      this.posts = data;
    })
  }
  onNavigatePostDetail(postId: string): void {
    this.router.navigate([postId], {relativeTo: this.route});
  }
  
  onNavigateCreatePost(): void{
    this.router.navigate(['nuevo'], {relativeTo: this.route});
  }

}

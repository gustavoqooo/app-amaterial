import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detalle',
  standalone: true,
  imports: [],
  templateUrl: './post-detalle.component.html',
  styleUrl: './post-detalle.component.css'
})
export class PostDetalleComponent {
  postId: string | null = ''
  constructor(private router: ActivatedRoute){
  }

  ngOnInit(): void {
    this.postId = this.router.snapshot.paramMap.get('id');
  }
}

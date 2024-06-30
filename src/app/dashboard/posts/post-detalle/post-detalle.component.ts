import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Post } from '../post';

enum FormType{
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-post-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './post-detalle.component.html',
  styleUrl: './post-detalle.component.css'
})
export class PostDetalleComponent {
  postId: string | null = ''
  postForm!: FormGroup
  formType!: FormType
  formTitulo!: string
  constructor(private router: ActivatedRoute,
    private postService: PostService){
  }

  ngOnInit(): void {
    this.postId = this.router.snapshot.paramMap.get('id');
    this.postForm = this.formulario()
    if(this.postId !== 'nuevo'){
      this.formTitulo = "Editar Post"
      this.formType = FormType.Actualizar
      this.cargarPost(Number(this.postId))
    }else{
      this.formTitulo = "Nuevo Post"
      this.formType = FormType.Crear
    }
  }
  formulario():FormGroup{
    return new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      userId: new FormControl('')
    })
  }
  cargarPost(postid:number): void{
    this.postService.getPostById(postid)
    .subscribe(
      (data) => {
        const {title, body, userId} = data
        this.postForm.setValue({title, body, userId})
      })
  }
  guardarPost():void{
    if(this.formType === FormType.Crear){
      this.registrarPost(this.postForm.value)
    }else{
      const postValue = {...this.postForm.value, id: this.postId }
      this.actualizarPost(postValue)
    }
  }
  registrarPost(post: Post){
    this.postService.createPost(post)
    .subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
  actualizarPost(post: Post){
    this.postService.updatePost(post)
    .subscribe(
      (data) => {
        console.log(data);
      }
    )
  }


}

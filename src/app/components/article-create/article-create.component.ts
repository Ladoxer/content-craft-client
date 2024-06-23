import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.css'
})
export class ArticleCreateComponent {
  contentForm!: FormGroup;

  constructor(private articleService: ArticleService, private router: Router, private fb: FormBuilder) {
    this.contentForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]]
    });
  }

  quillConfig = {
    toolbar:{
      container:[
        ['bold','italic','underline','strike'],
        ['blockquote', 'code-block'],

        [{'header':1},{'header':2}],
        [{'size':['xsmall','small','medium','large','xlarge']}],
        [{'align':[]}],
        ['clean'],
        ['link','image','video']
      ]
    }
  }

  createArticle() {
    const id = localStorage.getItem('userData');
    this.articleService.createArticle({...this.contentForm.value, authorId: id}).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  get title() {
    return this.contentForm.get('title');
  }

  get content() {
    return this.contentForm.get('content');
  }

  public blur(): void {
    console.log('blur');
  }

  public onSelectionChanged(): void {
    console.log('onSelectionChanged');
  }
}

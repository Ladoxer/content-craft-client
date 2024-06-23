import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.css'
})
export class ArticleEditComponent implements OnInit {
  contentForm!: FormGroup;

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router, private fb: FormBuilder) {
    this.contentForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.articleService.getArticleById(id).subscribe({
      next: (res: any) => {
        this.contentForm.setValue({title: res.title, content: res.content});
      },
      error: (err) => {
        console.log(err);
      }
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

  updateArticle() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.articleService.updateArticle(id, this.contentForm.value).subscribe({
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

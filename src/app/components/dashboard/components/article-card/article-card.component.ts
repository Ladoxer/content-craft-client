import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { ArticleService } from '../../../../services/article.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css',
})
export class ArticleCardComponent implements OnInit,AfterViewInit {
  @Input() article: any;
  summary: string = '';
  @Output() deleteEvent = new EventEmitter<string>();

  showConfirmDialog = false;

  isAuthor = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('userData') === this.article.authorId) {
      this.isAuthor = true;
    }
  }

  ngAfterViewInit(): void {
    if (this.article.content) {
      const tempElement = this.renderer.createElement('div');
      tempElement.innerHTML = this.article.content;

      const paragraphs = tempElement.getElementsByTagName('p');
      if (paragraphs && paragraphs.length > 0) {
        for (let i = 0; i < paragraphs.length; i++) {
          this.summary += paragraphs[i].textContent + ' ';
        }
      }

      this.cdr.detectChanges();
    }
  }

  deleteArticle(id: string) {
    this.articleService.deleteArticle(id).subscribe({
      next: () => {
        this.deleteEvent.emit(id);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  openConfirmDialog() {
    this.showConfirmDialog = true;
  }

  onConfirmed(result: boolean) {
    this.showConfirmDialog = false;
    if (result) {
      this.deleteArticle(this.article._id);
    }
  }
}

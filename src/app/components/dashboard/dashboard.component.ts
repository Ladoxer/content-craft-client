import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  articles: any[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticles().subscribe({
      next: (res: any) => {
        this.articles = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteArticle(id: string) {
    this.articles = this.articles.filter((article) => article._id !== id);
  }
}

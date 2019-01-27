import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { BlogPost } from '../blog-post'
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost[][];
  currentPage: number;
  @ViewChildren('tile')blogPostTileComponents: QueryList<BlogPostTileComponent>

  constructor(private blogServiceProvider: BlogDataService) { }

  ngOnInit() {
    this.currentPage = 0;
    this.blogPosts = this.blogServiceProvider.getData();
  }
  updatePage(newPage) {
    this.currentPage = newPage;
  }

  expandAll() {
  this.blogPostTileComponents.forEach(e=>e.showFullSummary())
  }

  favAll() {
    this.blogPosts[this.currentPage]
     .forEach(post=>post.isFav = true);
    // this.blogPosts[this.currentPage] =
    //   this.blogPosts[this.currentPage]
    //   .map(posty => ({
    //     title: posty.title,
    //     summary:posty.summary,
    //     isFav: true
    // }))
    
  }
}

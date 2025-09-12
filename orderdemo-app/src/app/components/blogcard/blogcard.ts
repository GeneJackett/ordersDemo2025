import { CommonModule, DatePipe} from '@angular/common';
import { Component, Input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-blogcard',
  imports: [
    MatButtonModule,
    MatCardModule,
    DatePipe,
    CommonModule
  ],
  templateUrl: './blogcard.html',
  styleUrl: './blogcard.css',
})
export class Blogcard {
@Input() blog: any = {title: "First blog", 
  author: "Wesley Gene Jackson", 
  summary: "My first blog ever has a new web developer. Super excited to show off my new found skills!", 
  content: "The side content should be wrapped in a <mat-sidenav> element. The position property can be used to specify which end of the main content to place the side content on. position can be either start or end which places the side content on the left or right respectively in left-to-right languages. If the position is not set, the default value of start will be assumed. A <mat-sidenav-container> can have up to two <mat-sidenav> elements total, but only one for any given side. The <mat-sidenav> must be placed as an immediate child of the <mat-sidenav-container>.Our engineers care deeply about performance. With Spring, you’ll notice fast startup, fast shutdown, and optimized execution, by default. Increasingly, Spring projects also support the reactive (nonblocking) programming model for even greater efficiency. Developer productivity is Spring’s superpower. Spring Boot helps developers build applications with ease and with far less toil than other competing paradigms. Embedded web servers, auto-configuration, and “fat jars” help you get started quickly, and innovations like LiveReload in Spring DevTools mean developers can iterate faster than ever before. You can even start a new Spring project in seconds, with the Spring Initializr at start.spring.io.", 
  date: "9/11/2025" }; // will hold { title, author, summary, content, date }
  
  expanded: boolean = false;

  // protected isExpanded = signal(false);
  // protected container = viewChild.required<ElementRef>('container');
  // protected expandedHeight = signal<string | null>(null);

  // protected toggle(){
  //   this.isExpanded.update(v=> !v);
   
  }


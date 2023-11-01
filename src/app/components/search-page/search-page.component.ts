import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  images: any[] = [];
  query: string = '';
  constructor(private imageService: ImageService) {}

  search(): void {
    this.imageService.searchImages(this.query)
      .subscribe(data => {
        console.log(data); // Affichez la réponse de l'API dans la console
        this.images = data.hits;
      });
  }
  


}

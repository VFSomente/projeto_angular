import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

  @Input() product!: {
    id: number;
    image: String;
    brand: String;
    name: String;
    price: String;
  };

  @Output() cardClick = new EventEmitter<number>();

  onCardClick(): void {
    this.cardClick.emit(this.product.id); 
  }
}
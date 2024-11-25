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
    image: string;
    brand: string;
    name: string;
    price: string;
  };

  @Output() cardClick = new EventEmitter<number>();

  onCardClick(): void {
    this.cardClick.emit(this.product.id); 
  }
}
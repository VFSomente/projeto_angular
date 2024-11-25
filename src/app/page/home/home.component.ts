import { Component } from '@angular/core';
import { ProdutosComponent } from "../../components/produtos/produtos.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProdutosComponent, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {} 
  onProductClick(productId: number): void {
    this.router.navigate(['/detalhe', productId]);
  }


  products = [
    {
      id: 1,
      image: '../../assets/img/img6.png',
      brand: 'Vegano',
      name: 'Essentials Rose - Paleta de Sombras 3g',
      price: 'R$ 25,90'
    },
    {
      id: 2,
      image: '../../assets/img/img7.png',
      brand: 'Vult',
      name: 'Essentials Rose - Paleta de Sombras 3g',
      price: 'R$ 39,90'
    },
    {
      id: 3,
      image: '../../assets/img/img8.png',
      brand: 'Vult',
      name: 'Camilla Loures - Paleta de Sombras 10g',
      price: 'R$ 48,90'
    },
    {
      id: 4,
      image: '../../assets/img/img9.png',
      brand: 'Fran by Franciny Ehlke',
      name: 'Kit Glosslicious (3 Produtos)',
      price: 'R$ 75,90'
    },
    {
      id: 5,
      image: '../../assets/img/img10(l).png',
      brand: 'L`Oréal Paris',
      name: 'Revitalift Blur Mágico - Primer Facial 27gn',
      price: 'R$ 64,90'
    },
    {
      id: 6,
      image: '../../assets/img/img11.png',
      brand: 'Nivea',
      name: 'Kit Lenços Demaquilantes 3 em 1 (2 Produtos)',
      price: 'R$ 38,80'
    },
    {
      id: 7,
      image: '../../assets/img/img12.png',
      brand: 'Essence',
      name: 'Naill Art Dry Drops - Óleo Secante para Esmalte 8ml',
      price: 'R$ 12,90'
    },
    {
      id: 8,
      image: '../../assets/img/img13.png',
      brand: 'L`Óreal Paris',
      name: 'Dermo Expertise Base 5 em 1 FPS 20 Média - BB Cream 30ml',
      price: 'R$ 44,90'
    },
    {
      id: 9,
      image: '../../assets/img/img14.png',
      brand: 'Ruby Kisses',
      name: 'Kiss New York 3D Contour Artist Power Light Medium - Paleta de Contorno 28,8g',
      price: 'R$ 44,90'
    },
    {
      id: 10,
      image: '../../assets/img/img15.png',
      brand: 'Catharine Hill',
      name: 'Face Powder Fixer Pálido - Pó Solto Natural 12g',
      price: 'R$ 47,90'
    },
    {
      id: 11,
      image: '../../assets/img/img16.png',
      brand: 'Catharine Hill',
      name: 'Angel Magic Pri Lessa',
      price: 'R$ 54,90'
    },
    {
      id: 12,
      image: '../../assets/img/img17.png',
      brand: 'Real Techniques',
      name: 'Kit Everyday Essentials (5 Produtos)',
      price: 'R$ 219,90'
    }
  ];
  
}

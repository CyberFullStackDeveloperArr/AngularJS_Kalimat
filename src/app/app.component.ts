import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  clearInputAndTextarea(): void {
    const input = document.getElementById('noc') as HTMLInputElement;
    const textarea = document.getElementById('non') as HTMLTextAreaElement;
    input.value = '';
    textarea.value = '';
  }
  constructor() {}
  @HostListener('document:contextmenu', ['$event'])
  onRightClick(event: MouseEvent): void {
    event.preventDefault();
    alert("Prohibited from Doing by Developer");
  }
  sentence: string = '';
  wordCount: number = 0;
  animateEyes: boolean = false;
  calculateWordCount(): void {
    const inputText = (document.getElementById('noc') as HTMLInputElement).value;

    if (inputText.trim() === '') {
      return;
    }

    setTimeout(() => {
     this.wordCount = inputText.split(/\s+/).filter(word => word !== '').length;
     (document.getElementById('non') as HTMLTextAreaElement).value = `${this.wordCount}`;
    }, 5000);

    this.animateEyes = true;
    setTimeout(() => {
      this.animateEyes = false;
    }, 5000);

    const inputElement = document.getElementById('noc') as HTMLInputElement;
    const buttonElement = document.getElementById('pus') as HTMLButtonElement;
    const vueton = document.getElementById('vue') as HTMLButtonElement;
    const textar = document.getElementById('non') as HTMLButtonElement;
    inputElement.disabled = true;
    buttonElement.disabled = true;
    vueton.disabled = true;
    textar.disabled = true;
    setTimeout(() => {
      inputElement.disabled = false;
      buttonElement.disabled = false;
      vueton.disabled = false;
      textar.disabled = false;
    }, 5000);
  }
  cleanInput(): void {
    const inputElement = document.getElementById('noc') as HTMLInputElement;
    if (inputElement) {
      inputElement.value = inputElement.value.replace(/[<>&)(]/g, '');
    }
  }
}

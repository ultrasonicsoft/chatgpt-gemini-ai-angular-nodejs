import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { GeminiService } from './services/gemini.service';

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatDrawerContainer, MatDrawer,  ChatContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'gemini-chatgpt';
  showFiller = false;

  public messages = signal<string[]>([]);
  private readonly geminiService = inject(GeminiService);

  protected async sendMessage(message: string) {
    this.geminiService.sendMessage(message).subscribe((response) => {
      console.log(response);
      this.messages.update((messages) => [...messages, response]);
    });
  }
}

import { ChangeDetectionStrategy, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-chat-input',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatInputComponent { 

  private readonly messagesService = inject(MessagesService);
  private readonly inputElement = viewChild<ElementRef<HTMLDivElement>>('inputElement');

  public message = signal<string>('');

  public onInput(event: Event) {
    const input = event.target as HTMLDivElement;
    const content = input.innerText.trim();
    this.message.set(content);
  }

  public onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        // Allow line break with Shift+Enter
        return;
      } else {
        // Send message with Enter
        event.preventDefault();
        if (this.canSend()) {
          this.sendMessage();
        }
      }
    }
  }

  public canSend(): boolean {
    return this.message().length > 0;
  }

  public sendMessage() {
    if (!this.canSend()) {
      return;
    }

    const messageContent = this.message();
    
    this.messagesService.sendMessage({
      id: crypto.randomUUID(),
      content: messageContent,
      role: 'user',
      createdAt: new Date(),
    });

    // Clear the input after sending
    this.clearInput();
  }

  private clearInput() {
    this.message.set('');
    const inputEl = this.inputElement()?.nativeElement;
    if (inputEl) {
      inputEl.innerText = '';
      inputEl.focus();
    }
  }
}

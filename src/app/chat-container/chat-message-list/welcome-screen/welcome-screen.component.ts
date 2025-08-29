import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-welcome-screen',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './welcome-screen.component.html',
  styleUrl: './welcome-screen.component.scss'
})
export class WelcomeScreenComponent {
  
  // Event emitter for when a predefined question is clicked
  questionSelected = output<string>();

  // Predefined questions
  predefinedQuestions = [
    {
      icon: 'scale',
      title: '10 Weight Loss Tips',
      description: 'Weight loss tips'
    },
    {
      icon: 'psychology',
      title: '10 Mental Health Tips',
      description: 'Mental health tips'
    },
    {
      icon: 'restaurant',
      title: '10 Nutrition Tips',
      description: 'Nutrition tips'
    },
    {
      icon: 'fitness_center',
      title: '10 Exercise Tips',
      description: 'Exercise tips'
    }
  ];

  onQuestionClick(question: { title: string; description: string }) {
    this.questionSelected.emit(question.description);
  }
}

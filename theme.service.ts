// theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: string = 'light';

  setTheme(theme: string) {
    this.currentTheme = theme;
    document.body.className = theme;
  }

  getTheme(): string {
    return this.currentTheme;
  }
}

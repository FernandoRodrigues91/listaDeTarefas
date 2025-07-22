import { ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Output, output, ViewChild } from '@angular/core';

// Interface
import { IListItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss'
})
export class InputAddItemComponent {
  #cdr = inject(ChangeDetectorRef);

  @ViewChild('inputText') inputText!: ElementRef;

  @Output() public outputList = new EventEmitter<IListItems>();
  public focusAndAddItem(value: string) {
    if (value) {
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = '';

      const dataAtual = new Date();
      const timestamp = dataAtual.getTime();
      const id = `ID ${timestamp}`;

      this.outputList.emit({
        id,
        checked: false,
        value
      })
      return this.inputText.nativeElement.focus();
    }
  }
}

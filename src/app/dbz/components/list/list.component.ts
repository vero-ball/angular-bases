import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: [],
  imports: [
    CommonModule
  ]
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10
    }
  ]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  onDeleteCharacter(id?: string): void {
    // this.characterList.splice(index, 1);
    // console.log(index);
    if (!id) return;
    this.onDelete.emit(id);
  }
 }

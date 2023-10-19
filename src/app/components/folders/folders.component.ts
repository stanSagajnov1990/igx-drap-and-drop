import {ChangeDetectorRef, Component, EventEmitter, Input, Output, Renderer2} from '@angular/core';
import {IEmail} from "../home/home.component";

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})
export class FoldersComponent {
  @Input()
  public emails: IEmail[] = [];

  @Output()
  emailsChanged = new EventEmitter<IEmail[]>();

  constructor(private renderer: Renderer2, private ref: ChangeDetectorRef){

  }


  public folders: any[] = [
    {icon: 'inbox', text: 'Inbox', dropChannel: 'inbox'},
    {icon: 'star_rate', text: 'Starred', dropChannel: 'starred'},
    {icon: 'error', text: 'Important', dropChannel: 'important'},
    {icon: 'send', text: 'Sent', dropChannel: 'sent'},
    {icon: 'label', text: 'Personal', dropChannel: 'personal'},
    {icon: 'label', text: 'Work', dropChannel: 'work'},
    {icon: 'label', text: 'Finances', dropChannel: 'finances'}
  ];

  public enterDropZone(event: any): void {
    this.renderer.addClass(event.owner.element.nativeElement, 'drag-enter');
  }

  public leaveDropZone(event: any): void {
    this.renderer.removeClass(event.owner.element.nativeElement, 'drag-enter');
  }

  public dropElement(event: any): void {
    console.log('dropElement')
    this.emails = this.emails.filter(x => x.checked !== true);
    console.log(this.emails)
    event.dragData = {};
    event.cancel = true;
    this.leaveDropZone(event);
    this.emailsChanged.emit(this.emails)
    this.ref.detectChanges()
  }

  public toggleCheck(email: any, checkbox: any): void {
    this.emails.forEach(x => x.checked = false);
    email.checked = true;
    checkbox.checked = true;
  }
}

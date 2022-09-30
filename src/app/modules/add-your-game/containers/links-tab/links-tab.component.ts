import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Animations } from '@app/core/animations/animations';
import { ConnectionsInfo, SubmitGame } from '@app/core/models/submit-game-interface.model';
import { Tag } from '@app/core/models/tag-interface.model';
import { UserStateService } from '@app/core/services/user-state.service';
import { Subscription } from 'rxjs';

interface SocialLink {
  tag: Tag;
  url: string;
}
@Component({
  selector: 'totem-links-tab',
  templateUrl: './links-tab.component.html',
  styleUrls: ['./links-tab.component.scss', '../form-styles.component.scss'],
  host: {
    class: 'flex flex-auto w-full h-full'
  },
  animations: [
    Animations.animations
  ]
})

export class LinksTabComponent implements AfterViewInit {

  get webPageErrors() {
    const webPage = this.linksForm.get('webPage');
    return webPage?.errors?.['required'] && (webPage?.touched || webPage?.dirty);
  }

  dropdownLinks: any[] = [{value: 'Twitter', url: 'https://twitter.com/'},{value: 'Facebook', url: 'https://facebook.com/'},{value: 'Discord', url: 'https://discrod.com/'},]

  @Output() linkFormDataEvent: EventEmitter<SubmitGame> = new EventEmitter();
  @Output() submitGame: EventEmitter<any> = new EventEmitter();
  // links: SocialLink[] = [];

  linksForm = new FormGroup({
    webPage: new FormControl('', Validators.required),
    rendererUrl: new FormControl(''),
    videoUrl: new FormControl(''),
    socialLinks: new FormArray([new FormControl('')])
  })
  socialLinksForm  = this.linksForm.get('socialLinks') as FormArray;

  ngAfterViewInit() {
    this.socialLinksForm.valueChanges.subscribe(() => {

      // for(let link of s)
      this.socialLinksForm.controls.forEach(link => {
        console.log('change')
        // link.patchValue('sefsge')
      })
    })
  }

  updateFormData() {
    const formData: any = this.linksForm.value;
    const formDataToSend: ConnectionsInfo = {
      webpage: formData?.webPage,
      assetRenderer: formData?.rendererUrl,
      promoVideo: formData?.videoUrl,
      socialLinks: [{type: this.socialLinksForm?.value[0], url: this.socialLinksForm?.value[0]}]
    }
    this.linkFormDataEvent.emit({connections: formDataToSend});
  }

  submitGameInfo() {
    this.submitGame.emit();
  }

  onAddLink() {
    this.socialLinksForm.push(new FormControl(null));
  }

  onRemoveLink(index: number) {
    this.socialLinksForm.removeAt(index);
  }

  onSelectTag(tag: Tag, i: any) {
    const url = this.urlByValue(tag.value);
    this.socialLinksForm.controls[i].patchValue(url);
    const link = this.linksForm.value.socialLinks;
    console.log(link);
  }

  urlByValue(value: string) {
    if(value === 'Twitter') return 'twitter.com/';
    if(value === 'Facebook') return 'facebook.com/';
    if(value === 'Discord') return 'discord.com/';
    return '';
  }

  onRemoveTag(tag: Tag) {
    // this.links = this.links.filter(link => link.reference != tag.reference);
    // tag.reference.checked = false;
  }

}

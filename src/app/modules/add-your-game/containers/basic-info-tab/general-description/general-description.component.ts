import { AfterViewInit, Component, ElementRef, ErrorHandler, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Tag } from "@app/core/models/tag-interface.model";
import { Animations } from "@app/core/animations/animations";
import { Subscription } from "rxjs";
import { SubmitGameService } from "@app/modules/add-your-game/services/submit-game.service";
import { FormsService } from "@app/modules/add-your-game/services/forms.service";

@Component({
    selector: 'general-description',
    templateUrl: './general-description.component.html',
    styleUrls: ['../../form-styles.component.scss'],
    animations: [
        Animations.animations
    ]
})

export class GeneralDescription implements OnDestroy, AfterViewInit {

    checkErrors(controlName: string, errorType: string) {
        const control = this.generalDescription.get(controlName);
        if (errorType === 'required') {
            return control?.errors?.['required'] && (control?.touched || control?.dirty);
        }
        if (errorType === 'all') {
            return control?.errors && (control?.touched || control?.dirty);
        }
    }

    constructor(private formsService: FormsService) { }

    ngAfterViewInit() {
        this.retrieveValues();
    }

    setItems!: any;

    dropdownItems = [{value: 'Comedy'}, {value: 'Horror'}, {value: 'Third-person'}, {value: 'Survival'}, {value: 'Singleplayer'}, {value: 'Action'}, {value: 'Base defense'}, {value: 'Adventure'}, {value: 'MMORPG'}];

    dropdownTouched = false;
    genreTags: Tag[] = [];
    genreIndexer: number = 0;

    briefDescLength = 0;
    fullDescLength = 0;

    sub!: Subscription;

    @Input() selectedJsonFile: File | null = null;

    @Output() formValid = new EventEmitter<any>();
    @Output() onJsonFileSelected = new EventEmitter<any>();

    generalDescription = new FormGroup({
        name: new FormControl(null, [Validators.required]),
        author: new FormControl(null, [Validators.required]),
        description: new FormControl(null, [Validators.required, Validators.maxLength(300)]),
        genre: new FormArray([]),
        fullDescription: new FormControl(null, [Validators.maxLength(3000)]),
    })
    genresForm = this.generalDescription.get('genre') as FormArray;

    addJsonFile(event: any) {
      console.log(event);
      const jsonFile: File = event?.target?.files[0];
      this.selectedJsonFile = jsonFile;
      this.onJsonFileSelected.emit(jsonFile);
      this.isFormValid();
    }

    removeFile() {
      this.selectedJsonFile = null;
      this.onJsonFileSelected.emit(null);
      this.isFormValid();
    }

    onSelectTag(tag: Tag) {
        this.genreTags.push(tag);
        this.genresForm.push(new FormControl(tag.value));
        this.saveValue();
    }

    onRemoveTag(tag: Tag) {
        this.genreTags = this.genreTags.filter(genre => genre.reference != tag.reference);
        tag.reference.checked = false;
        this.genresForm.removeAt(this.genresForm.controls.findIndex(genre => genre.value === tag.value));
        this.saveValue();
    }

    onRemoveGenre(genreControl: any) {
        console.log(genreControl.value);
        const tagToRemove = this.genreTags.filter(tag => { return tag.value == genreControl.value });
        tagToRemove[0].reference.checked = false;

        this.genreTags = this.genreTags.filter(genre => genre.value != genreControl.value);
        this.genresForm.removeAt(this.genresForm.controls.findIndex(genre => genre.value === genreControl.value));
        this.saveValue();
    }

    isFormValid() {
        this.formValid.emit({formName: 'general', value: this.generalDescription.valid && (this.selectedJsonFile ? true : false)});
    }


    saveValue() {
        const value = this.generalDescription.value;
        this.formsService.saveForm('general', value);
        this.isFormValid();
    }
    retrieveValues() {
        const values =  this.formsService.getForm('general');
        if(!values) return;
        this.generalDescription.patchValue({
            name: values.name,
            author: values.author,
            description: values.description,
            fullDescription: values.fullDescription,
        });
        this.setItems = values.genre;
        this.isFormValid();
    }



    briefDescChange(e: any) {
        const length = +e.length;
        this.briefDescLength = length;
    }

    fullDescChange(e: any) {
        const length = +e.length;
        this.fullDescLength = length;
    }

    onTouchDropdown() {
        this.dropdownTouched = true;
    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }

}

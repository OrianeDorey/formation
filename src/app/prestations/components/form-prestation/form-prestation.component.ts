import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();

  public states = State;
  public form: FormGroup;
  private init = new Prestation;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      typePresta: [
        this.init.typePresta, // valeur par défaut
        Validators.required
      ],
      client: [
        this.init.client,
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      nbJours: [
        this.init.nbJours
      ],
      tjmHt: [
        this.init.tjmHt
      ],
      tauxTva: [
        this.init.tauxTva
      ],
      state: [
        this.init.state
      ],
      comment: [
        this.init.comment
      ],
    });
  }

  public onSubmit() {
    this.nItem.emit(this.form.value);
  }

}

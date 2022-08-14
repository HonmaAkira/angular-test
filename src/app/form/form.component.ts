import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  // formの設定
  form: FormGroup = this.fb.group({
    startDate: ['', Validators.maxLength(100)],
    endDate: ['', Validators.maxLength(100)],
  });
  // 初期値なしの変数
  startDate;
  endDate;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}

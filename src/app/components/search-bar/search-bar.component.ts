import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataProviderService } from 'src/app/data-provider.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dpService: DataProviderService
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      text: [
        null,
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
    });
  }
  submitHandler(searchKey: string) {
    this.dpService.doSearch(searchKey);
    this.resetForm();
  }
  private resetForm() {
    this.form.reset({ text: '' });
  }
}

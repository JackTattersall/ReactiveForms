import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthServiceService} from '../services/auth-service.service';
import {FormsServiceService} from '../services/forms-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private authService: AuthServiceService, private formsService: FormsServiceService) { }

  ngOnInit() {
  }

  fetchAllForms() {
    this.formsService.getForm('Person Form');
  }

  onSignIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signIn(email, password);
  }
}

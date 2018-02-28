import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private apiService: ApiService,
    private router: Router,
    private auth: AuthService, private fb: FormBuilder ) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    });

  }
  onSubmit() {
    console.log(this.loginForm.value);
    this.apiService.postResource('authenticate', this.loginForm.value).
    subscribe(resp => { console.log(resp.token);
                       this.auth.setToken(resp.token);
                       this.router.navigate(['/admin/dashboard'])
                      });
  }

}

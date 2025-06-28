import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

import { Account } from "~/app/core/model/admin/account.model";
import { FormConfig } from "@core/interface/login/form.config";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class Login {
  constructor (private router: Router) {}

  account: Account = new Account('duyle@gmail.com', '1');

  forms: FormConfig[] = [
    {
      home: 'Trang chủ',
      heading: 'ĐĂNG NHẬP',
      linkHome: '/',
      fields: [
        {
          label: 'Email',
          name: 'email',
          value: '',
          placeholder: 'Nhập email'
        },
        {
          label: 'Mật khẩu',
          name: 'password',
          value: '',
          placeholder: 'Nhập mật khẩu'
        }
      ],
      info: 'Nếu bạn quên mật khẩu? Vui lòng nhấn "Quên mật khẩu".',
      linkText: 'Quên mật khẩu?',
      link: '/auth/forgot-pw',
      btn: 'Đăng nhập'
    }
  ];

  onSubmit(form: FormConfig) {
    const [emailField, passwordField] = form.fields;
    const email = emailField.value;
    const password = passwordField.value;

    this.account = new Account(email, password);

    if (email === 'duyle@gmail.com' && password === '1') {
      localStorage.setItem ('token', 'mock_token_123')
      this.router.navigate(['/admin']);
    } else if(email === '' || password === ''){
      alert('Vui lòng nhập đầy đủ thông tin!')
    } else if (!email.includes('@')) {
      alert('Email không hợp lệ. Vui lòng nhập đúng định dạng email.');
    } else {
      alert('Email hoặc Mật khẩu không đúng!');
    } 
  }
}

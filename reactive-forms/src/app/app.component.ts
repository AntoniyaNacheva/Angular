import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  form: FormGroup;
  forbiddenUsernames = ['Emma', 'Tony'];

  ngOnInit() {
    this.form = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });

    // this.form.valueChanges.subscribe((value) => console.log(value));

    this.form.statusChanges.subscribe((status) => console.log(status));

    this.form.setValue({
      userData: {
        username: 'Eva',
        email: 'eva@test.com',
      },
      gender: 'female',
      hobbies: [],
    });

    this.form.patchValue({
      userData: {
        username: 'Anna',
      },
    });
  }

  onSubmit() {
    console.log(this.form);
    this.form.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get('hobbies')).push(control);
  }

  get controls() {
    return (this.form.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }

    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}

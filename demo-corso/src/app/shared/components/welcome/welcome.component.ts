import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MyValidator } from '../../validators/myValidator';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  // public myControl = new FormControl('valore iniziale');
  // valore: Observable<string> | null = null;

  userForm: any;
  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group(
      { firstName: [ '', [Validators.required, Validators.minLength(3), MyValidator]],
        lastName: ['']
      }
    );
    // this.valore = this.myControl.valueChanges;
    // this.valore.subscribe( x => console.log(x));
  }

  onKey(event: string) {
    console.log(event);
   // const myInput = event.target as HTMLInputElement;
   //  console.log(myInput.value);
  }

  testInput(): void {
    // console.log(this.myControl);
    // this.myControl.setValue("");
  }

  mySubmit(){

  }

  get myfirstName() { return this.userForm.get('firstName')}


}

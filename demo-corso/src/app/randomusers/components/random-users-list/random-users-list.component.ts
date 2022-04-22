import { Component} from '@angular/core';
import { Result } from '../../models/randomuser';
import { RandomUsersService } from '../../services/random-users.service';

@Component({
  selector: 'app-random-users-list',
  templateUrl: './random-users-list.component.html',
  styleUrls: ['./random-users-list.component.css']
})
export class RandomUsersListComponent  {

  results: Result[] = [];

  constructor(private service: RandomUsersService) {
    this.service.getData(50).subscribe(response =>  this.results = response.results);
  }


}

import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

interface User {
  name: string,
  id: number,
  description: string,
  img: string
}

@Injectable({
  providedIn: "root"
})
export class UserService {
  users = [
    {
      name: "James",
      id: 1,
      description: "wahoo",
      img:
        "https://vignette.wikia.nocookie.net/heroes-and-villians/images/5/5a/Shrek-PNG-Photo.png/revision/latest?cb=20170821193129"
    },
    {
      name: "Keanu Reeves",
      id: 2,
      description: "where we droppin boys",
      img:
        "https://vignette.wikia.nocookie.net/heroes-and-villians/images/5/5a/Shrek-PNG-Photo.png/revision/latest?cb=20170821193129"
    },
    {
      name: "SHrek",
      id: 3,
      description: "swampy boy",
      img:
        "https://vignette.wikia.nocookie.net/heroes-and-villians/images/5/5a/Shrek-PNG-Photo.png/revision/latest?cb=20170821193129"
    },
    {
      name: "Mario",
      id: 4,
      description: "yippee",
      img:
        "https://vignette.wikia.nocookie.net/heroes-and-villians/images/5/5a/Shrek-PNG-Photo.png/revision/latest?cb=20170821193129"
    },
    {
      name: "Luigi",
      id: 5,
      description: "wahah",
      img:
        "https://vignette.wikia.nocookie.net/heroes-and-villians/images/5/5a/Shrek-PNG-Photo.png/revision/latest?cb=20170821193129"
    },
    {
      name: "Goofy",
      id: 6,
      description: "guilty",
      img:
        "https://vignette.wikia.nocookie.net/heroes-and-villians/images/5/5a/Shrek-PNG-Photo.png/revision/latest?cb=20170821193129"
    }
  ];

  usersUpdated = new Subject <User[]> ();

  constructor(private router: Router) {}

  get _users() {
    return this.users.slice();
  }

  editUser(user) {
    let index = this.users.findIndex(x => x.id === user.id);
    this.users[index].name = user.name;
    this.users[index].description = user.description;
    this.usersUpdated.next(this.users);
    this.router.navigateByUrl('users');
  }
}

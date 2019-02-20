import { Injectable } from '@angular/core';
let defaultId = 1;
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AuthService {
user: string = 'Default Id:' + defaultId++;
  constructor() { }
}

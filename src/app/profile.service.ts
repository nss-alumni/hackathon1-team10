import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProfileService {


  constructor(private profile: AuthService) { 

  }

  getProfiles() { }
  getProfileByID(uid) { }
  editProfile(uid) { }
  createProfile() { }



}

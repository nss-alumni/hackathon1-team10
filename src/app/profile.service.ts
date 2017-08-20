import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class ProfileService {
  

  constructor(private profile: AuthService) { 

  }

  getProfiles() { }
  getProfileByID(uid) { }
  editProfile(uid) { }
  createProfile() { }



}

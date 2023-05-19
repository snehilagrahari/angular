import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable()
export class UserService{
    constructor(private http : HttpClient){
        //empty
    }
    getData(){
        return this.http.get('https://reqres.in/api/users?page=2');
    }
}
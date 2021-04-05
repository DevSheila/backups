export class User {
    
    // url->link to profile
    // login->username
    // htm_url->link to profile
    // location
    // public_repos
    // followers
    // following
    // avatar_url
    // created_at-->date acccount was created
    userInfo:any
  constructor(
    public public_repos:number,
    public followers:number,
    public following:number,
    public avatar_url :string,
    public starred_url:string,
    public login:string,
    public html_url:string,
    public location:string,
    public created_at:Date){
      
    }
}
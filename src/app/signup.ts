
export interface Signup {


    firstname:string;
   lastname:string;
   dob:string;
    email:string;
    password:string
    
    }
    export interface UniqueConstraintError {
        errorNum: Number;
        offset: Number;
      }
      export interface InsertedSuccess {
        Result: any;
        lastRowid: String;
        rowsAffected: Number;
      }
      export interface Read {
          Result: [];
      }
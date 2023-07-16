export interface Frequency {


    ID_NO:number;
    Name:string;
    Frequency:string;
    Ph_NO:number;
    City:string;
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
    
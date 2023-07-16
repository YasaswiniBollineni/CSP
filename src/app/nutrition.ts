

export interface Nutrition {
    ID_NO:number;
    Name:string;
    Disease:string;
    Ph_NO:number;
    Mail_ID:string;
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
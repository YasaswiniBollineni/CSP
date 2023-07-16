
export interface Anganwadi {

    ID_NO:number;
    Name:string;
    Anganwadi_center:string;
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
    
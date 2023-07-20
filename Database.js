const oracledb = require("oracledb");
// Set database connection details
const dbConfig = {
  user: "System",
  password: "tiger",
  connectString: "localhost:1521/orcl",
};

const Query = async (sql) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql);
    await connection.commit();
    return result;
  } catch (error) {
    return (error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const Result = async (...Parameters) => {
  
  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
    try{
      Details = eval(`(${Parameters[2]})`);
    } catch(err){}
 switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.ID_NO}','${Details.Name}','${Details.Disease}','${Details.Ph_NO}','${Details.Mail_ID}','${Details.City}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set ID_NO = '${Parameters[3].ID_NO}', Name = '${Parameters[3].Name}', Disease = '${Parameters[3].Disease}', Ph_NO = '${Parameters[3].Ph_NO}', Mail_ID = '${Parameters[3].Mail_ID}', City = '${Parameters[3].City}' where ID_NO = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where ID_NO = '${Details}'`;
      break;
    case "Read":
        Sql = `select * from ${Parameters[0]}`;
        if(Details != "All"){
          Sql = `select * from ${Parameters[0]} where ID_NO = '${Details}'`;
        }
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};



const varsha = async (...Parameters) => {
  
  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
    try{
      Details = eval(`(${Parameters[2]})`);
    } catch(err){}
 switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.ID_NO}','${Details.Name}','${Details.Anganwadi_center}','${Details.Ph_NO}','${Details.City}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set ID_NO = '${Parameters[3].ID_NO}', Name = '${Parameters[3].Name}', Anganwadi_center = '${Parameters[3].Anganwadi_center}', Ph_NO = '${Parameters[3].Ph_NO}', City = '${Parameters[3].City}' where ID_NO = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where ID_NO = '${Details}'`;
      break;
    case "Read":
        Sql = `select * from ${Parameters[0]}`;
        if(Details != "All"){
          Sql = `select * from ${Parameters[0]} where ID_NO = '${Details}'`;
        }
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};

const sri = async (...Parameters) => {
  
  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
    try{
      Details = eval(`(${Parameters[2]})`);
    } catch(err){}
 switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.ID_NO}','${Details.Name}','${Details.Frequency}','${Details.Ph_NO}','${Details.City}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set ID_NO = '${Parameters[3].ID_NO}', Name = '${Parameters[3].Name}', Frequency = '${Parameters[3].Frequency}', Ph_NO = '${Parameters[3].Ph_NO}', City = '${Parameters[3].City}' where ID_NO = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where ID_NO = '${Details}'`;
      break;
    case "Read":
        Sql = `select * from ${Parameters[0]}`;
        if(Details != "All"){
          Sql = `select * from ${Parameters[0]} where ID_NO = '${Details}'`;
        }
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};


const signup = async (...Parameters) => {
  
  let Sql, Message;
       console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  try{
      Details = eval(`(${Parameters[2]})`);
    } catch(err){}
  switch (Parameters[1]) {
       case "Insert":
          Sql = `insert into ${Parameters[0]} values('${Details.firstname}','${Details.lastname}','${Details.dob}','${Details.email}','${Details.password}')`;
          Message = "Inserted Successfully";
          break;
       case "Update":
          Sql = `update ${Parameters[0]} set firstname = '${Parameters[3].firstname}', lastname = '${Parameters[3].lastname}',dob='${Parameters[3].dob}',email = '${Parameters[3].email}' , password = '${Parameters[3].password}'where email = '${Details}'`;
          Message = `Success Updating`;
          break;
      case "Delete":
         Sql = `delete from ${Parameters[0]} where email = '${Details}'`;
         Message = `Success deleting ${Details}`;
         break;         
      case "Read":
          Sql = `select * from ${Parameters[0]} where email='${Details}'`;
          Message = `Showing all the values in the database ${Parameters[0]}`;
          if(Details.disease){
              Sql = `select * from ${Parameters[0]} where disease = '${Details.wef_date}'`;
              Message = `${Details.wef_date} Retrived`
          }
      break;
      default:
       console.error("Invalid Parameters");
       break;
   }
     console.log(Sql);
     var result= await Query(Sql);
     result.Message = Message;
     return result;
 };

 const signin = async (...Parameters) => {
  
  let Sql, Message;
       console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  try{
      Details = eval(`(${Parameters[2]})`);
    } catch(err){}
  switch (Parameters[1]) {
         
      case "Read":
          Sql = `select email,password  from ${Parameters[0]} where email='${Details}'`;
          Message = `Showing all the values in the database ${Parameters[0]}`;
          if(Details.disease){
              Sql = `select * from ${Parameters[0]} where disease = '${Details.wef_date}'`;
              Message = `${Details.wef_date} Retrived`
          }
      break;
      default:
       console.error("Invalid Parameters");
       break;
   }
     console.log(Sql);
     var result= await Query(Sql);
     result.Message = Message;
     return result;
 };


module.exports = {
  Result:Result,
  varsha:varsha,
  sri:sri,
  signup:signup,
  signin:signin,
}
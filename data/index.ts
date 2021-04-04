import DBManager from "./db/dbms"
import PaymentRepositoryDB from "./repos/PaymentRepositoryImpl"


const repo = new PaymentRepositoryDB(new DBManager()); 

export{
    repo,
}
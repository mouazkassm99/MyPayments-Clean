import { PaymentRepositoryInterface } from "../domain/interface/PaymentsRepository";
import DBManager from "./db/dbms"
import PaymentRepositoryLocalDataSource from "./repos/PaymentRepositoryLocalDataSource"


// const repo = new PaymentRepositoryLocalDataSource(new DBManager()); 

class DBRepositoryBuilder {
    constructor() {}

    public makeLocalDataSource() : PaymentRepositoryInterface{
        return new PaymentRepositoryLocalDataSource(new DBManager());
    }
}


export default DBRepositoryBuilder;
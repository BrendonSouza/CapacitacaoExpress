import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "src/database/database.sqlite",
    synchronize: true,
    logging: false,
    entities: ["src/entities/*.ts"],
    migrations: ["src/database/migrations/*.ts"],
    migrationsRun: true,
    migrationsTableName: "migration_table",    
})

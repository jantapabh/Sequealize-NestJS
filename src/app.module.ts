import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
// import { AuthModule } from './auth/auth.module';
// import { FinanceModule } from './finance/finance.module';
// import { SequelizeModule } from '@nestjs/sequelize';


@Module({
  imports: [UsersModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

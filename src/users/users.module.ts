import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/database/database.module';
import { usersProviders } from './entity/users.providers';
//import { FinanceModule } from 'src/finance/finance.module';
//import { FinanceService } from 'src/finance/finance.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService,...usersProviders],
  exports: [UsersService],
})
export class UsersModule { }

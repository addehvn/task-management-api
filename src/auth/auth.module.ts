import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../strategy/jwt.strategy';

@Module({
  imports:[UserModule,
    JwtModule.register({
      secret:process.env.DB!,
      signOptions:{
        expiresIn:'1h'
      }
    })
  ],
  providers: [
    JwtStrategy,
    AuthService
  ],
  controllers: [AuthController]
})
export class AuthModule {}

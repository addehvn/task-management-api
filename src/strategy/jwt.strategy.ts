import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../interfaces/jwtPayload.interface";
import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
constructor(
  private configService:ConfigService
){
  super({
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    ignoreExpiration:false,
    secretOrKey:configService.get<string>('JWT_SECRET')!,
  })
}

async validate(payload:JwtPayload){
return{
userId:payload.sub,
email:payload.email,
name:payload.name
}
}
}
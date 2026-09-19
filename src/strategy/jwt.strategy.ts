import { JwtService } from "@nestjs/jwt";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../interfaces/jwtPayload.interface";

export class JwtStrategy extends PassportStrategy(Strategy){
constructor(){
  super({
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    ignoreExpiration:false,
    secretOrKey:process.env.DB!
  })
}

async validate(payload:JwtPayload){
return{
userId:payload.sub,
email:payload.email
}
}
}
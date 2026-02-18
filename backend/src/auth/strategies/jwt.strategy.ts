import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Request } from "express";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies?.accessToken;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey:
        configService.get<string>("JWT_SECRET") ||
        "fallback-dev-secret-change-in-production",
    });
  }

  async validate(payload: any) {
    return {
      sub: payload.sub,
      email: payload.email,
      name: payload.name,
      role: payload.role,
    };
  }
}

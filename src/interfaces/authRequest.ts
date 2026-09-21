import { Request } from "express";
import { userProfile } from "./userProfile.interface";

export interface AuthRequest extends Request{
  user: userProfile
}
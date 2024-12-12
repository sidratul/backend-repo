import { NextFunction, Request, Response } from "express";
import { auth } from "../firebase/firebase.config";

export async function authGuard(req: Request, res: Response, next: NextFunction) {
  const appCheckToken = req.header("X-Firebase-AppCheck");

  if (!appCheckToken) {
    res.status(401);
    res.json({
      message: 'Unauthorized'
    });

    return;
  }

  try {
    const appCheckClaims = await auth.verifyIdToken(appCheckToken)
    console.log(appCheckClaims.token);
    next();
  } catch (err) {
    console.log(err);
    res.status(401);
    res.json({
      message: 'Unauthorized'
    });
  }
}
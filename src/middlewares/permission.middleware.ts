import { NextFunction, Request, Response } from "express";
import { HttpErrorResponse, getHeader } from "../helper";
import { services } from "../services";

/* admin permission handle */
export const adminPermission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const path: string = req.originalUrl;
    const api_key: any = req.headers.api_key;
    const token: any = await req.headers.authorization;
    if (!token) {
      return res.status(404).json(
        await HttpErrorResponse({
          status: false,
          errors: [
            {
              field: "access-token",
              message: "Authorization token not found.",
            },
          ],
        })
      );
    }

    const generatedHeader = await getHeader(api_key, token);

    /* verify token */
    const verifiedResponse = await services.permission.verifyToken(
      generatedHeader
    );

    if (verifiedResponse) {
      req.user = {
        id: verifiedResponse.id,
        name: verifiedResponse.name,
        role: verifiedResponse.role,
      };
      next();
      return;
    }
  } catch (error: any) {
    if (error) {
      console.log(error);

      if (error.name === "TokenExpiredError") {
        return res.status(410).json(
          await HttpErrorResponse({
            status: false,
            errors: [
              {
                field: "access-token",
                message: "Authorization token expired.",
              },
            ],
          })
        );
      }

      return res.status(401).json(
        await HttpErrorResponse({
          status: false,
          errors: [
            {
              field: "access-token",
              message: "Unauthorized request.",
            },
          ],
        })
      );
    }
  }
};

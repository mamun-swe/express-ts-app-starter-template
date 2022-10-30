import { NextFunction, Request, Response } from "express";
import { HttpErrorResponse, HttpSuccessResponse } from "../../helper";

/* List of resources */
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json(
      await HttpSuccessResponse({
        status: false,
        message: "Demo response.",
        data: [],
      })
    );
  } catch (error: any) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

import { Request, Response, NextFunction } from "express";
import PaystackService from "../PaystackService";
import SupportResponseFormat from "./SupportResponseFormat";

const paystackService = new PaystackService();

class SupportController {
  public static async resolveAccountDetails(req: Request, res: Response, next: NextFunction) {
    try {
      const { account_number, bank_code } = req.body;
      const action = await paystackService.resolveAccountDetails(account_number, bank_code);
      return SupportResponseFormat.resolveAccountDetails(res, action);
    } catch (e) {
      next(e);
    }
  }

  public static async getBanks(req: Request, res: Response, next: NextFunction) {
    try {
      const action = await paystackService.listBankCodes();
      return SupportResponseFormat.getBanks(res, action);
    } catch (e) {
      next(e);
    }
  }
}

export default SupportController;

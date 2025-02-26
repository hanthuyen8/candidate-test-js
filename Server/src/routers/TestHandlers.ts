import {IDependencies} from "../Dependencies";
import {Request, Response} from "express";

export default class TestHandlers {
  constructor(private readonly _dep: IDependencies) {
  }

  public checkWhoIsWallet(req: Request, res: Response) {
    try {
      const address = req.query.address as string;
      this._dep.logger.info(`Checking address: ${address}`);
      if (!address) {
        res.status(400).send('Address is required');
        return;
      }
      const result = address.toLowerCase() === '0x4CB24190F20A14fA72157bfce4815fAbfb76A906'.toLowerCase();
      res.sendSuccess({
        isValid: result
      });
    } catch (e) {
      this._dep.logger.error(e);
      res.status(500).send('Internal server error');
    }
  }
}
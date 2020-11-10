import * as express from "express";
import { Request, Response } from 'express';
import { pubSub } from '../pubsub';
export const register = ( app: express.Application ) => {

  /**
   * Subscribe to an event
   */
  app.post('/subscribe/:topic',(req: Request, res: Response) => {
    const pubsub = pubSub();
    pubsub.subscribe(req.params.topic, req.body);
    return res.json(req.body);
  });

  /**
   * Publish event
   */
  app.post('/publish/:topic',(req: Request, res: Response) => {
    const pubsub = pubSub();
    pubsub.publish(req.params.topic, req.body);
    return res.json(req.body);
  });

  /**
   * Wildcard url
   */
  app.post('/*',(req: Request, res: Response) => {
    return res.json(req.body);
  });
};
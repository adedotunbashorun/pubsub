import * as express from "express";
import { Request, Response } from 'express';
import { pubSub } from '../pubsub';
export const register = ( app: express.Application ) => {

  // define a route handler for the default home page
  app.get( "/", ( req: Request, res: Response ) => {
      return res.send('<p>Welcome Home</p>');
  });

  app.post('/subscribe/:topic',(req: Request, res: Response) => {
    const pubsub = pubSub();
    pubsub.subscribe(req.params.topic, req.body);
    return res.json(req.body);
  });

  app.post('/publish/:topic',(req: Request, res: Response) => {
    const pubsub = pubSub();
    pubsub.publish(req.params.topic, req.body);
    return res.json(req.body);
  });

  app.post('/*',(req: Request, res: Response) => {
    return res.json(req.body);
  });
};
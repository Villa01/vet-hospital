import { Request, Response } from 'express';


// Patron Proxy https://refactoring.guru/es/design-patterns/proxy
export interface RequestHandler {
    request(request: Request, response: Response): void;
}

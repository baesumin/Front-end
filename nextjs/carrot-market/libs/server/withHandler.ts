import { NextApiRequest, NextApiResponse } from 'next';

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

interface configType {
  method: 'GET' | 'POST' | 'DELETE';
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}

export default function withHandler({ method, handler, isPrivate = true }: configType) {
  return async function (req: NextApiRequest, res: NextApiResponse): Promise<any> {
    if (req.method !== method) {
      return res.status(405).end();
    }
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: 'Please log in.' });
    }
    try {
      await handler(req, res);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}

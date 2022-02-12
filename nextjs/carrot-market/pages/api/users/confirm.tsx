import client from '@libs/server/client';
import { withIronSessionApiRoute } from 'iron-session/next';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: {
      payload: token
    }
  });
  if (!exists) res.status(404).end();
  console.log(exists);

  res.status(200).end();
}

export default withIronSessionApiRoute(withHandler('POST', handler), {
  cookieName: 'carrotsession',
  password: '1231231231231231321321321321321321321321321321321321321321313213213213'
});

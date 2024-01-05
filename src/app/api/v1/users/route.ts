import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const session = await getAuthSession();
  try {
    if (session) {
      const userId = req.body.user.id;
      const user = await db.user.findUnique({
        where: { id: userId },
      });
      res.status(200).json(user);
    }
  } catch (error) {
    console.log('there is an error:', error);
  }
}

export async function PATCH(req: NextApiRequest, res: NextApiResponse) {
  const session = await getAuthSession();
  try {
    if (session) {
      const userId = req.body.user.id;
      const { ...body } = req.body.user;
      const updateUser = await db.user.update({
        where: { id: userId },
        data: { ...body },
      });
    }
  } catch (error) {
    console.log('there is an error:', error);
  }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const session = await getAuthSession();
  try {
    if (session) {
      const userId = req.body.user.id;
      const deleteUser = await db.user.delete({
        where: { id: userId },
      });
      res.status(200).json({ message: 'delete user successfully' });
    }
  } catch (error) {
    console.log('there is an error:', error);
  }
}

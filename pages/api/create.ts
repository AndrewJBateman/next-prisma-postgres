import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../lib/prisma";

const userResponse = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Only POST method allowed'
    });
  }

  try {
    const { user } = req.body;
    const savedUser = await prisma.user.create({
      data: user
    });
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json({ 
      message: 'An error occured',
      error: error
   })
  }
}

export default userResponse;

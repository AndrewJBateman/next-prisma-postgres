import prisma from "../../lib/prisma";

const deleteUser = async (req: any, res: any) => {
  console.log('type of req: ', typeof(req));
  console.log('type of res: ', typeof(res));
    try {
        const { id } = req.body;
        console.log('type of id: ', typeof(id));
        if (!id) {
            res.json({ error: 'An id is required' });
            return;
        }
        const user = await prisma.user.delete({
            where: { id }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong!' })
    }
}

export default deleteUser;
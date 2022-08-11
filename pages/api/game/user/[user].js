import { UserByUser } from '../../../../utils/api/games'

export default async function handler(req, res) {
    const {  query: { user }, method } = req

    switch (method) {
        case 'GET':
            const data = await UserByUser(user)
            res.status(200).json(data);
        break;
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
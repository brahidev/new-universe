import { ItemById } from '../../../utils/api/items'

export default async function handler(req, res) {
    const {  query: { id }, method } = req

    switch (method) {
        case 'GET':
            const data = await ItemById(id)
            res.status(200).json(data);
        break;
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
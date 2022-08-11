import { CategoryById } from '../../../utils/api/categories'

export default async function handler(req, res) {
    const {  query: { name }, method } = req

    switch (method) {
        case 'GET':
            const data = await CategoryById(name)
            res.status(200).json(data);
        break;
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
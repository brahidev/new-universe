import { All } from '../../utils/api/games'

export default async function handler(req, res) {
    const { method } = req

    switch (method) {
        case 'GET':
            const contentGet = await All()
            res.status(contentGet.state).json(contentGet.data);
        break;
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

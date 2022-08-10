import { CreateGame, UpdateGame } from '../../../../utils/api/games'

export default async function handler(req, res) {
    const { method, body } = req

    switch (method) {
        case 'POST':
            if (!body) {
                res.status(400).end(`Body is Required`)
            }

            const contentPost = await CreateGame(body)
            res.status(200).json(contentPost);
        break;
        case 'PUT':
            if (!body) {
                res.status(400).end(`Body is Required`)
            }

            const contentUpdate = await UpdateGame(body)
            res.status(contentUpdate.state).json(contentUpdate.data);
        break;
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
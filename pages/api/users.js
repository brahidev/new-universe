import { Auth, All, UpdateUser, CreateUser } from '../../utils/api/users'

export default async function handler(req, res) {
    const { method, body } = req

    switch (method) {
        case 'GET':
            const contentGet = await All()
            res.status(contentGet.state).json(contentGet.data);
        break;
        case 'PUT':
            if (!body) {
                res.status(400).end(`Body is Required`)
            }

            const contentUpdate = await UpdateUser(body)
            res.status(contentUpdate.state).json(contentUpdate.data);
        break;
        case 'POST':
            if (!body) {
                res.status(400).end(`Body is Required`)
            }

            const contentPost= await CreateUser(body)
            res.status(contentPost.state).json(contentPost.data);
        break;
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

import { LoginUser } from '../../../utils/api/users'

export default async function handler(req, res) {
    const { method, body } = req

    switch (method) {
        case 'POST':
            if (!body) {
                res.status(400).end(`Body is Required`)
            }

            const data = await LoginUser(body)
            res.status(data.state).json(data);
        break;
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
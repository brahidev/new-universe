export default async function handler(req, res) {
    const {  query: { name }, method } = req

    switch (method) {
        case 'GET':
            // const data = await UserByName(name)
            res.status(200).json(name);
        break;
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
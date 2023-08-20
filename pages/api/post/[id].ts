import { client } from "@/utils/client";
import { postDetailQuery } from "@/utils/queries";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { id } = req.query;
        const query = postDetailQuery(id);

        try {
            const data = await client.fetch(query);
            res.status(200).json(data[0]);
        } catch (err) {
            res.status(400).json({ message: 'Something went wrong' });
        }
    }
}


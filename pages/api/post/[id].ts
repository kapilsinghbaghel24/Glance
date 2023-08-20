import { client } from "@/utils/client";
import { uuid } from 'uuidv4';
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

    if (req.method === 'PUT') {
        const { comment, userId } = req.body;
        const { id }: any = req.query;

        try {
            const data = await client
                .patch(id)
                .setIfMissing({ comments: [] })
                .insert('after', 'comments[-1]', [
                    {
                        comment,
                        _key: uuid(),
                        postedBy: {
                            _type: 'postedBy',
                            _ref: userId,
                        },
                    }
                ])
                .commit();

            res.status(200).json(data);
        } catch (err) {
            res.status(400).json('Error');
        }
    }
}


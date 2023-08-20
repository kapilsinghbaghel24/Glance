import axios from 'axios';
import jwt_decode from 'jwt-decode';

interface IProps {
    name: string;
    picture: string;
    sub: string;
}

export const createorGetUser = async (response: any, addUser: any) => {
    const decoded: IProps = jwt_decode(response.credential);

    const { name, picture, sub } = decoded;

    const user = {
        _id: sub,
        _type: 'user',
        userName: name,
        image: picture,
    }

    await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth`, user);
    
    addUser(user);

}
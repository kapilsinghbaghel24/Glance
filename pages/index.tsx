import NoResults from '@/components/NoResults';
import VideoCard from '@/components/VideoCard';
import axios from 'axios';
import React from 'react';
import { Video } from '../types';

interface HomeProps {
  videos: Video[];
}

const Home = ({ videos }: HomeProps) => {
  console.log(videos)
  return (
    <div className='flex flex-col gap-10 videos h-full' >
      {videos.length ? (
        videos.map((video: Video) => (
          <VideoCard post={video} key={video._id} />
        ))
      ) : (
        <NoResults text='No Videos' />
      )
      }
    </div>
  )
}

export default Home;

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`);

  return {
    props: {
      videos: data
    }
  }
}

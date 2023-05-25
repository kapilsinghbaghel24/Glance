import NoResults from '@/components/NoResults';
import VideoCard from '@/components/VideoCard';
import axios from 'axios';
import React from 'react';

// interface HomeProps{
//   videos:
// }

const Home: React.FC<any> = ({ videos }) => {
  console.log(videos)
  return (
    <div className='flex flex-col gap-10 videos h-full' >
      {videos.length ? (
        videos.map((video: any) => (
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
  const { data } = await axios.get('http://localhost:3000/api/post');

  return {
    props: {
      videos: data
    }
  }
}

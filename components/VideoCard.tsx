import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { Video } from '@/types';
import { NextPage } from 'next';

interface VideoCardProps {
    post: Video;
}

const VideoCard: NextPage<VideoCardProps> = ({ post }) => {
    const [isHover, setIsHover] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [isVideoMuted, setIsVideoMuted] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef?.current?.pause();
            setPlaying(false);
        } else {
            videoRef?.current?.play();
            setPlaying(true);
        }
    }

    useEffect(()=>{
     if(videoRef?.current){
         videoRef.current.muted = isVideoMuted;
     }
    },[isVideoMuted]);

    return (
        <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
            <div>
                <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
                    <div className='md:w-16 md:h-16 w-10 h-10'>
                        <Link href="/">
                            <>
                                <Image
                                    width={40}
                                    height={40}
                                    className='rounded-full'
                                    src={post.postedBy.image}
                                    alt='profile-img'
                                />
                            </>
                        </Link>
                    </div>
                    <div>
                        <Link href='#'>
                            <div className='flex items-center gap-2'>
                                <p className='flex gap-2 items-center md:text-md font-bold text-primary'>{post.postedBy.userName}{` `}
                                    <GoVerified className='text-blue-400 text-md' />
                                </p>
                                <p className='capitalize font-medium text-xs text-gray-500 hidden md:block'>{post.postedBy.userName}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='lg:ml-20 flex gap-4 relative'>
                <div
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className='rounded-3xl' >
                    <Link href={`/detail/${post._id}`}>
                        <video
                            ref={videoRef}
                            loop
                            className='lg:w-[600px] h-[300px] md:h-[400px] lg:h-[530px] rounded-2xl cursor-pointer bg-gray-100'
                            src={post.video.asset.url}
                        ></video>
                    </Link>
                    {isHover && (
                        <div className='absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3'>
                            {playing ? (
                                <button onClick={onVideoPress} title='Pause'>
                                    <BsFillPauseFill className='text-black text-2xl lg:text-4xl' />
                                </button>
                            ) : (
                                <button onClick={onVideoPress} title='Play'>
                                    <BsFillPlayFill className='text-black text-2xl lg:text-4xl' />
                                </button>
                            )}
                            {isVideoMuted ? (
                                <button onClick={()=>setIsVideoMuted(false)} title='volume-btn'>
                                    <HiVolumeOff className='text-black text-2xl lg:text-4xl' />
                                </button>
                            ) : (
                                <button onClick={()=>setIsVideoMuted(true)} title='volume-btn'>
                                    <HiVolumeUp className='text-black text-2xl lg:text-4xl' />
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google';
import '@/styles/globals.css'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  console.log(session);
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) {
    return null;
  }

  return (
  <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
      <div className='overflow-hidden h-screen'>
        <Navbar />
        <div className='flex gap-6 md:gap-20'>
          <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
            <Sidebar />
          </div>
          <div className='mt-4 flex flex-col gap-10 overflow-auto videos h-[88vh] flex-1'>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default App;
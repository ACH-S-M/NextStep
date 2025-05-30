
import { Head  } from '@inertiajs/react';
import SidebarLogin from '../components/ui/sidebarLogin';
import HeaderLogo from '../components/ui/brandLogo';
import Post from '../components/postingan';
import PostwithPhoto from '../components/PostinganFoto';
export default function Welcome() {

    return (
        <>
            <Head title="Belum Login">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="container bg-black h-[3000px] w-full ">
                <HeaderLogo></HeaderLogo>
                 <div className="content flex w-full gap-8">
                    <div className="w-[300px]">
                        <SidebarLogin />
                    </div>
                        <div className="main w-1/2 ml-20">
                                    <Post
                                    user="Muhamad Ihsan"
                                    time="2 jam yang lalu"
                                    content={`Test Komponen HALO HALO`}/>

                                    <PostwithPhoto
                                    user="Ihza maulana"
                                    time="15 jam yang lalu"
                                    content={`Dibutuhkan segera Backend spesialis dengan syarat memiliki pengalaman 2 tahun di bahasa GO dan Arsitektur Microservise`}/>

                        </div>
                 </div>
            </div>
        </>
    );
}

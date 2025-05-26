
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import Postingan from '../components/PostinganFoto';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 ">
                     <Postingan
                                                        user="Ihza maulana"
                                                        time="15 jam yang lalu"
                                                        content={`Dibutuhkan segera Backend spesialis dengan syarat memiliki pengalaman 2 tahun di bahasa GO dan Arsitektur Microservise`}/>

            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 ">
                     <Postingan
                                                        user="Ihza maulana"
                                                        time="15 jam yang lalu"
                                                        content={`Dibutuhkan segera Backend spesialis dengan syarat memiliki pengalaman 2 tahun di bahasa GO dan Arsitektur Microservise`}/>

            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 ">
                     <Postingan
                                                        user="Ihza maulana"
                                                        time="15 jam yang lalu"
                                                        content={`Dibutuhkan segera Backend spesialis dengan syarat memiliki pengalaman 2 tahun di bahasa GO dan Arsitektur Microservise`}/>

            </div>
        </AppLayout>
    );
}

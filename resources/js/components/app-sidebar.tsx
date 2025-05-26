
import { NavMain } from '@/components/nav-main';
import Foto from '@/components/profilpengguna';
import { Sidebar, SidebarContent} from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { LayoutGrid } from 'lucide-react';

const mainNavItems: NavItem[] = [

    {
        title: 'Dashboards',
        href: '/dashboard',
        icon: LayoutGrid,
    },
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <Foto></Foto>
                <NavMain items={mainNavItems} />     {/* List Menu nya disini  */}
            </SidebarContent>
        </Sidebar>
    );
}

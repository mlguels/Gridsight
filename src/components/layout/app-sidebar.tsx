'use client';

import {
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  Sidebar,
  SidebarMenuItem,
  SidebarMenu,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { id: 'overview', label: 'Overview', href: '/dashboard/overview' },
  { id: 'nodes', label: 'Nodes', href: '/dashboard/nodes' },
  { id: 'alerts', label: 'Alerts', href: '/dashboard/alerts' },
  { id: 'settings', label: 'Settings', href: '/dashboard/settings' },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-4">Gridsight</SidebarHeader>
      <SidebarContent className="px-4">
        <nav aria-label="Primary">
          <SidebarMenu>
            {navItems.map(({ id, label, href }) => (
              <SidebarMenuItem key={id}>
                <SidebarMenuButton asChild isActive={pathname === href}>
                  <Link href={href}>{label}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </nav>
      </SidebarContent>
      <SidebarFooter className="px-4 pb-4">v. 0.1</SidebarFooter>
    </Sidebar>
  );
}

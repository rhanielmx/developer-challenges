import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'machines', title: 'Machines', href: paths.dashboard.machines, icon: 'gear-fine' },
  { key: 'sensor', title: 'Sensor', href: paths.dashboard.sensors, icon: 'plugs-connected' },
  { key: 'monitoring', title: 'Monitoring Points', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];

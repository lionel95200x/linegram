import { icons } from '@/components/dashboard/Base/Lucide';
import menu from '@/main/menu';

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  badge?: number;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface MenuState {
  menu: Array<Menu | string>;
}

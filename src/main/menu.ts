import { type Menu } from '@/stores/menuSlice';
import { routes } from '@/utils/route';

const menu: Array<Menu | 'divider'> = [
  {
    icon: 'Home',
    title: 'Dashboard',
    pathname: routes.dashboard,
    subMenu: [
      {
        icon: 'Activity',
        pathname: '/dashboard',
        title: 'Dashboard',
      },
      {
        icon: 'User',
        pathname: routes.profile,
        title: 'Profile',
      },
      {
        icon: 'Activity',
        pathname: '/dashboard-overview-3',
        title: 'Overview 3',
      },
      {
        icon: 'Activity',
        pathname: '/dashboard-overview-4',
        title: 'Overview 4',
      },
    ],
  },
  {
    icon: 'ShoppingBag',
    title: 'E-Commerce',
    subMenu: [
      {
        icon: 'Activity',
        pathname: '/categories',
        title: 'Categories',
      },
      {
        icon: 'Activity',
        pathname: '/add-product',
        title: 'Add Product',
      },
      {
        icon: 'Activity',
        pathname: '/products',
        title: 'Products',
        subMenu: [
          {
            icon: 'Zap',
            pathname: '/product-list',
            title: 'Product List',
          },
          {
            icon: 'Zap',
            pathname: '/product-grid',
            title: 'Product Grid',
          },
        ],
      },
      {
        icon: 'Activity',
        pathname: '/transactions',
        title: 'Transactions',
        subMenu: [
          {
            icon: 'Zap',
            pathname: '/transaction-list',
            title: 'Transaction List',
          },
          {
            icon: 'Zap',
            pathname: '/transaction-detail',
            title: 'Transaction Detail',
          },
        ],
      },
      {
        icon: 'Activity',
        pathname: '/sellers',
        title: 'Sellers',
        subMenu: [
          {
            icon: 'Zap',
            pathname: '/seller-list',
            title: 'Seller List',
          },
          {
            icon: 'Zap',
            pathname: '/seller-detail',
            title: 'Seller Detail',
          },
        ],
      },
      {
        icon: 'Activity',
        pathname: '/reviews',
        title: 'Reviews',
      },
    ],
  },
];

export default menu;

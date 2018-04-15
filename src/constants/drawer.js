import * as paths from './paths';

export const menuItems = [
  {
    id: 'todos',
    description: 'todos',
    iconClass: 'icon-list-todo',
    path: paths.TODOS,
    exact: true,
  },
  {
    id: 'charts',
    description: 'charts',
    iconClass: 'icon-chart',
    path: paths.CHARTS,
    exact: true,
  },
];
export default menuItems;

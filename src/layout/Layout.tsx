import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div style={{ viewTransitionName: 'page' }}>
      <Outlet />
    </div>
  );
}
'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the Tina admin interface on the client side
    window.location.href = '/admin/index.html';
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <p>Redirecting to admin panel...</p>
    </div>
  );
}

// Required for static export
export function generateStaticParams() {
  return [{ index: [] }];
}

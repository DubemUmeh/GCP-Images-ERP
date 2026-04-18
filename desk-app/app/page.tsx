'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Role = 'users' | 'admin';

const isRole = (value: string): value is Role => {
  return value === 'users' || value === 'admin';
};

const isTauriRuntime = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return '__TAURI_INTERNALS__' in window;
};

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const fromStorage = window.localStorage.getItem('authenticated-role');
    if (fromStorage && isRole(fromStorage)) {
      router.replace(`/${fromStorage}`);
      return;
    }

    if (!isTauriRuntime()) {
      return;
    }

    let unlisten: (() => void) | undefined;

    void import('@tauri-apps/api/event')
      .then(({ listen }) => listen<string>('role-selected', (event) => {
        const role = event.payload;
        if (!isRole(role)) {
          return;
        }

        window.localStorage.setItem('authenticated-role', role);
        router.replace(`/${role}`);
      }))
      .then((cleanup) => {
        unlisten = cleanup;
      })
      .catch((error) => {
        console.error('Failed to attach role-selected listener:', error);
      });

    return () => {
      unlisten?.();
    };
  }, [router]);

  return (
    <main style={{ display: 'grid', placeItems: 'center', padding: '2rem' }}>
      <section className="w-full max-w:[420px] my-0 mx-auto border rounded-md p-6">
        <h1 style={{ marginTop: 0 }}>GCP Images Printing Management System</h1>
        <p style={{ marginBottom: 0, color: '#94a3b8' }}>
          Waiting for authenticated role routing...
        </p>
      </section>
    </main>
  );
}

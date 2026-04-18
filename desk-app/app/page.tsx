'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { listen } from "@tauri-apps/api/event";

type Role = 'user' | 'admin';

const isRole = (value: string): value is Role => {
  return value === 'user' || value === 'admin';
}

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    console.log('mouting users')
    const fromStorage = window.localStorage.getItem('authenticated-role');
    if (fromStorage && isRole(fromStorage)) {
      router.replace(`/${fromStorage}`);
    }

    const unlistenPromise = listen<string>('role-selected', (event) => {
      const role = event.payload;
      if (!isRole(role)) {
        return;
      }

      window.localStorage.setItem('authenticated-role', role);
      router.replace(`/${role}`);
    });

    console.log('mounted users')
    return () => {
      unlistenPromise.then((unlisten) => unlisten());
    };
  }, [router]);

  return (
    <main style={{ display: "grid", placeItems: "center", padding: "2rem" }}>
      <section className="w-full max-w:[420px] my-0 mx-auto border rounded-md p-6">
        <h1 style={{ marginTop: 0 }}>Investment Desktop</h1>
        <p style={{ marginBottom: 0, color: "#94a3b8" }}>
          Waiting for authenticated role routing...
        </p>
      </section>
    </main>
  )
}
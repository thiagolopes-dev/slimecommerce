import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <h1>Admin Panel</h1>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <main>
        <h1>Welcome, {session.user?.name}</h1>
        <button onClick={() => signOut()}>Sign Out</button>
      </main>
    </div>
  );
}
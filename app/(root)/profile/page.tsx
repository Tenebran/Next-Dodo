import { getUserSession } from '@/shared/lib';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = getUserSession();

  if (!session) {
    return redirect('/not-auth');
  }

  return <div>это твой профиль</div>;
}

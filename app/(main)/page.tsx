import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import DashboardCard from '@/components/dashboard/DashboardCard';
import PostsTable from '@/components/posts/PostsTable';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
        <DashboardCard
          title='Posts'
          count={100}
          icon={<Newspaper className='text-slate-600' size={72} />}
          colors='bg-amber-200'
        />
        <DashboardCard
          title='Categories'
          count={12}
          icon={<Folder className='text-slate-600' size={72} />}
          colors='bg-lime-200'
        />
        <DashboardCard
          title='Users'
          count={750}
          icon={<User className='text-slate-600' size={72} />}
          colors='bg-violet-300'
        />
        <DashboardCard
          title='Comments'
          count={1200}
          icon={<MessageCircle className='text-slate-600' size={72} />}
          colors='bg-pink-200'
        />
      </div>
      <AnalyticsChart />
      <PostsTable title='Latest Posts' limit={4} />
    </>
  );
}

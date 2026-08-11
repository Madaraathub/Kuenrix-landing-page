import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';

export const NotFoundPage = () => {
  return (
    <PageHeader
      title="404 - Page Not Found"
      description="The page you are looking for does not exist."
    >
      <Link
        to="/"
        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#0B132B] text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
      >
        Return Home
      </Link>
    </PageHeader>
  );
};

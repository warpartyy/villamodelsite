// ProtectedRoute.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  isSignedIn: boolean;
  redirectPath: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, isSignedIn, redirectPath }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push(redirectPath);
    }
  }, [isSignedIn, router, redirectPath]);

  return <>{children}</>;
};

export default ProtectedRoute;

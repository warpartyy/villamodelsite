// Layout.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';
//import { useThirdweb } from '@thirdweb-dev/react';
import { useThirdweb } from '@thirdweb-dev/react/dist/hooks';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectPath: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirectPath }) => {
  const router = useRouter();
  const { isSignedIn } = useThirdweb();

  useEffect(() => {
    if (!isSignedIn) {
      router.push(redirectPath);
    }
  }, [isSignedIn, router, redirectPath]);

  return <>{children}</>;
};

export default ProtectedRoute;

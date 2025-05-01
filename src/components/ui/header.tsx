import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/context/auth.context';
import Cookies from 'js-cookie';

export default function Header() {
  const router = useRouter();
  const { isAuthenticated, user, logout } = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false); // New state to show the login form
  const [isClient, setIsClient] = useState(false); // Track if we're on the client

  // Set the isClient to true on component mount to trigger client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle logout and clear cookies
  const handleLogout = () => {
    logout();
    Cookies.remove('access_token');
    router.push('/login');
  };

  // Handle the login button click to show login form
  const handleLoginClick = () => {
    setShowLoginForm(true); // Show the login form when login button is clicked
  };

  if (!isClient) {
    return null; // Don't render anything until mounted on the client
  }

  return (
    <header className="flex justify-end px-6 py-4 bg-gray-100 shadow-md">
      {/* If user is not authenticated, show the login button */}
      {!isAuthenticated ? (
        <div>
          <Button onClick={handleLoginClick}>
            Login
          </Button>

          {/* When Login is clicked, show the Login Form */}
          {showLoginForm && (
            <div className="mt-4 p-4 bg-white rounded shadow w-64 text-sm border">
              <div>
                <strong>Login Form</strong>
                <form>
                  {/* You can replace this with actual login form fields */}
                  <input type="email" placeholder="Email" className="mb-2 w-full p-2 border" />
                  <input type="password" placeholder="Password" className="mb-2 w-full p-2 border" />
                  <Button variant="outline" className="mt-2 w-full">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-end">
          {/* Profile button that toggles the profile dropdown */}
          <Button variant="ghost" onClick={() => setShowProfile(!showProfile)}>
            👤 Profile
          </Button>

          {/* Dropdown showing user details if showProfile is true */}
          {showProfile && (
            <div className="mt-2 p-4 bg-white rounded shadow w-64 text-sm border">
              <div className="mb-2">
                <strong>Name:</strong> {user?.name || 'Loading...'}
              </div>
              <div className="mb-2">
                <strong>Email:</strong> {user?.email || 'Loading...'}
              </div>
              <div className="mb-2">
                <strong>Contact:</strong> {user?.phone || 'Loading...'}
              </div>
              {/* Logout button */}
              <Button variant="outline" onClick={handleLogout} className="mt-2 w-full">
                Logout
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

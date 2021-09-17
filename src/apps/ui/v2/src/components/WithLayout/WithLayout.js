import React, { createContext, useState } from 'react';

import { NavBar } from '../NavBar';
import { FooterBar } from '../FooterBar';
import '../App/App.css';
import { ErrorBoundary } from '../ErrorBoundary';

export const ApplicationContext = createContext(null);
export const UserContext = createContext(null);
export const ErrorContext = createContext(null);

const Layout = ({ children }) => {
  const TryYourLuckContent = {
    scoreBoard: [],
  };
  const token = localStorage.getItem('token');
  const { props: { id, displayName = 'Guest' } = {} } = localStorage.getItem(
    'user',
  )
    ? JSON.parse(localStorage.getItem('user'))
    : {};
  const initUser = {
    userLoggedIn: !!token,
    accessToken: token,
    props: { id, displayName },
  };
  const [appState, setAppState] = useState(TryYourLuckContent);
  const [user, setUser] = useState(initUser);
  const [error, setError] = useState('');
  return (
    <ApplicationContext.Provider value={[appState, setAppState]}>
      <ErrorContext.Provider value={[error, setError]}>
        <UserContext.Provider value={[user, setUser]}>
          <main className="main">
            <NavBar userLoggedIn={user.userLoggedIn} />
            <ErrorBoundary error={error}>
              <section className="container">{children}</section>
            </ErrorBoundary>
            <FooterBar />
          </main>
        </UserContext.Provider>
      </ErrorContext.Provider>
    </ApplicationContext.Provider>
  );
};

const WithLayout = (Component) => (props) =>
  (
    <Layout>
      <Component {...props} />
    </Layout>
  );

export default WithLayout;

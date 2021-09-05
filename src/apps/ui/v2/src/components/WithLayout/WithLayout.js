import React, { createContext, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { NavBar } from '../NavBar';
import { FooterBar } from '../FooterBar';
import '../App/App.css';
import { TEAM_MEMBERS } from '../../queries';

export const ApplicationContext = createContext(null);

const Layout = ({ children }) => {
  const TryYourLuckContent = {
    userLoggedIn: false,
    accessToken: '',
    name: 'Upama',
    scoreBoard: [],
  };
  const [appState, setAppState] = useState(TryYourLuckContent);
  const { loading, error, data } = useQuery(TEAM_MEMBERS);
  useEffect(() => {
    if (!loading && !error) {
      setAppState(() => ({
        ...appState,
        scoreBoard: data.getTeamMembers,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, error, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // setAppState({ ...appState, scoreBoard: data.getTeamMembers });
  TryYourLuckContent.scoreBoard = data.getTeamMembers;
  return (
    <ApplicationContext.Provider value={[appState, setAppState]}>
      <main className="main">
        <NavBar
          userLoggedIn={appState.userLoggedIn}
          setUserLoggedIn={appState.setUserLoggedIn}
        />
        <section className="container">{children}</section>
        <FooterBar />
      </main>
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

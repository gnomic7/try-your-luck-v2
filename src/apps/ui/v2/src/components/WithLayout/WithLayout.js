import React from 'react';
import { NavBar } from '../NavBar';
import { FooterBar } from '../FooterBar';
import '../App/App.css';
const Layout = ({ children }) => (
  <main className="main">
    <NavBar />
    <section className="container">{children}</section>
    <FooterBar />
  </main>
);

const WithLayout = (Component) => (props) =>
  (
    <Layout>
      <Component {...props} />
    </Layout>
  );

export default WithLayout;

import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  top: 50%;
  -ms-transform: translateY(20%);
  transform: translateY(20%);
  @media screen and (min-width: 500px) {
    margin: auto 10%;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <Head>
          <title>Java Quiz</title>
          <meta name="og_image" property="og:image" content="blob:https://vercel.com/3bd395b0-cf9c-4b3c-abd7-18d0f756f6aa" />
        </Head>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Java Quiz</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Lorem inpsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>See another Quizes</h1>

            <p>Lorem inpsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/rafaelalbia" />
    </QuizBackground>
  );
}

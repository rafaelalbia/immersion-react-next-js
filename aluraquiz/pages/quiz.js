import React from 'react';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Loading...
      </Widget.Header>

      <Widget.Content>
        [Loading Question]
      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h3>
              Question
              1
              of
              {` ${db.questions.length}`}
            </h3>
          </Widget.Header>

          <img
            alt="Description"
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
            }}
            src="https://ribblevalleyconcrete.co.uk/home/400x400-light/"
          />
          <Widget.Content>
            <h2>
              Title
            </h2>
            <p>
              Description
            </p>
            <Button>
              Confirm
            </Button>
          </Widget.Content>
        </Widget>
        <LoadingWidget />
      </QuizContainer>
    </QuizBackground>
  );
}

/* eslint-disable react/prop-types */
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

function QuestionWidget({
  question,
  questionsTotal,
  questionIndex,
}) {
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/"> /> */}
        <h3>
          {`Question ${questionIndex + 1} of ${questionsTotal}`}
        </h3>
      </Widget.Header>

      <img
        alt="Description"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.img}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>
        <Button>
          Confirm
        </Button>
      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  const question = db.questions[0];
  const questionsTotal = db.questions.length;
  const questionIndex = 0;

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <QuestionWidget
          question={question}
          questionsTotal={questionsTotal}
          questionIndex={questionIndex}
        />
        <LoadingWidget />
      </QuizContainer>
    </QuizBackground>
  );
}

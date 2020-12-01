import React from 'react';
import Increment from '../Incriment/Incriment';
import SignUpForm from '../SignUpForm/SignUpForm';
import Feedback from '../Feedback/Feedback/Feedback';
import Layout from '../Layout/Layout.js';

const App = () => (
  <Layout>
    <Increment step={2} initialValue={100} />
    <SignUpForm />
    <Feedback />
  </Layout>
);

export default App;

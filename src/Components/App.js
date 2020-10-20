import React from 'react';
import Increment from './Incriment.js'
import SignUpForm from './SignUpForm.js'
import Feedback from './Feedback.js'
import Layout from './Layout.js'


const App = () => (
  <Layout>
    <Increment step={2} initialValue={100} />
    <SignUpForm />
    <Feedback />
  </Layout>
)

export default App;

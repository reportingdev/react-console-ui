import React from 'react';
import ConsoleUI from './ConsoleUI';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ConsoleUI',
  component: ConsoleUI,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args:any) => (<ConsoleUI {...args} />);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const dummyLogData = [
  { type: 'success', message: 'successful connection', details: 'User ID: 1234' },
  { type: 'info', message: 'User logged in', details: 'User ID: 1234' },
  { type: 'warning', message: 'API limit reached', details: 'Reached 90% of API call limit' },
  { type: 'error', message: 'Database connection failed', details: 'Failed to connect to database at 10.0.0.1' },
  { type: 'info', message: 'Cache cleared', details: 'User cache cleared successfully' },
  { type: 'error', message: 'Invalid form submission adlkj aldkj alk jadsflkj fdkljf lkasdjf alsdkj adslkjda flkajdf adflkj alkjaf dlkadfj lafdskj fdalkjafds lkadsfj dlsafkj dfsalkjdafs lkdjasf ladskfj asdflkj asdflkja dsflkjasdf lkadsfj adflskj adflkjadf lkadfjs ladfksj adfsljk adfsljk adfsljk adfsljkadfsjkldfsaj kldfasjlkfdajlk jkl', details: 'Missing required fields' },
  { type: 'error', message: 'Invalid form submission', details: 'Missing required fields' },
  { type: 'error', message: 'Invalid form submission', details: 'Missing required fields' },
  { type: 'error', message: 'Invalid form submission', details: 'Missing required fields' },
  { type: 'info', message: 'Payment processed', details: 'Payment ID: ABC123' },
];


Primary.args = {
  logs:dummyLogData
};

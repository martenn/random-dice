import React from 'react';
import 'app/App.css';
import { ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { ActionBoard } from 'app/components/ActionBoard';
import NoSleep from 'nosleep.js';

const noSleep = new NoSleep();
document.addEventListener(
  'click',
  function enableNoSleep() {
    document.removeEventListener('click', enableNoSleep, false);
    noSleep.enable();
  },
  false,
);

if (typeof window !== 'undefined') {
  injectStyle();
}

function App() {
  return (
    <div>
      <ActionBoard />
      <ToastContainer hideProgressBar={false} />
    </div>
  );
}

export default App;

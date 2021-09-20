import 'app/App.css';
import { ToastContainer } from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";
import { ActionBoard } from 'app/components/ActionBoard';

if (typeof window !== "undefined") {
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

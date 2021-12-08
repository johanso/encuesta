// Components
import InputID from './components/InputID';
// Context
import QuestionProvider from './context/QuestionsContext';
import UserProvider from './context/UserContext';

import logo from './img/logo-cota.png';

function App() {

   return (
      <UserProvider>
         <QuestionProvider>

            <header className="bg-white shadow-sm">
               <div className="row no-gutters">
                  <div className="col-12 text-center">
                     <img src={logo} alt="logo" height="60" />
                  </div>
               </div>
            </header>

            <div className="wrapper_centering py-4">
               <div className="container_centering">
                  <div className="container">
                        <InputID /> :
                  </div>
               </div>
            </div>

         </QuestionProvider>
      </UserProvider>
   );
}

export default App;

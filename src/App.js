import { useState } from 'react';
// Components
import MultiStepForm from './components/MultiStepForm';
import InputID from './components/InputID';
// Context
import QuestionProvider from './context/QuestionsContext';

import logo from './img/logo-cota.png';

function App() {

   const [idUser, isetIdUser] = useState(null)

   const getUserValid = (data) => {
      isetIdUser(data)
   }

   const getDataUser = (data) => {
      isetIdUser(data)
   }

   return (
      <QuestionProvider>
         <div className="wrapper_centering">
            <div className="container_centering">
               <div className="container">

                  {
                     !idUser ? 
                     <InputID getUserValid={getUserValid} /> :
                     <MultiStepForm getDataUser={getDataUser} />
                  }

               </div>
            </div>
         </div>
         <footer>
               <center><img src={logo} alt="logo" className="logo-footer"/></center>
         </footer>
      </QuestionProvider>
   );
}

export default App;

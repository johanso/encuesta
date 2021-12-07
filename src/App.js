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

         <header className="bg-white shadow-sm">
            <div className="row">
               <div className="col-12 text-center text-lg-left">
                  <img src={logo} alt="logo" height="60" />
               </div>
            </div>
         </header>

         <div className="wrapper_centering py-4">
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
      </QuestionProvider>
   );
}

export default App;

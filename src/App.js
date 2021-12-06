import { useState } from 'react';
// Components
import MultiStepForm from './components/MultiStepForm';
import InputID from './components/InputID';
// Context
import QuestionProvider from './context/QuestionsContext';

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
      </QuestionProvider>
   );
}

export default App;

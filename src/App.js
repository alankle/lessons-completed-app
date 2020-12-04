import React, { useState } from "react";
import ProgressBar from './components/ProgressBar';
import logo from './logo.svg';
import './App.css';

function App() {
  const lessonsList = [
    { id: 1, lesson: 'State', completed: false },
    { id: 2, lesson: 'UseRef', completed: false },
    { id: 3, lesson: 'Hooks personalizados', completed: false },
    { id: 4, lesson: 'Eventos', completed: false },
    { id: 5, lesson: 'Pulir aplicación', completed: false },
   ];
   
   const [lessons, setCompleted] = useState(lessonsList);

   const onCompleted = (id, completed) => {
     const updatedList =lessons.map(lesson =>{
       if (lesson.id === id) {
         lesson.completed = !completed;
       }
       return lesson
     });
     console.log(updatedList);
     setCompleted(updatedList);
   }

   const lessonsCompleted = lessons.filter(l => l.completed).length;
   const percentage = (100 * lessonsCompleted) / lessons.length;

  return (    
    <div className="App">
      <div className="App-wrapper">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="Title">Mi applicacion React</h3>
          <div className="LessonCheck">
          {
            lessons.map(({lesson, id, completed}) => (
              <label key={id}> 
                <input type="checkbox"
                        onChange={() => onCompleted(id, completed)}/>

                
                <span/>
                  {lesson}
                
              </label>
            ))
          }
          </div>
          <ProgressBar percentage={percentage}></ProgressBar>
      </div>
    </div>
  );
}

export default App;

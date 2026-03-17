import React from 'react'
import { Mycontext } from './Createcontext'
import Home from '../pages/Home';
import Usecontext from './Usecontext';



function Provide() {
    const userData = [
  { id: 1, name: "Alice", age: 25, gender: "Female", salary: 4500 },
  { id: 2, name: "Bob", age: 32, gender: "Male", salary: 3800 },
  { id: 3, name: "Charlie", age: 28, gender: "Non-binary", salary: 4200 },
  { id: 4, name: "Diana", age: 41, gender: "Female", salary: 5600 },
  { id: 5, name: "Edward", age: 35, gender: "Male", salary: 4900 },
  { id: 6, name: "Fiona", age: 22, gender: "Female", salary: 3100 },
  { id: 7, name: "George", age: 29, gender: "Male", salary: 4000 },
  { id: 8, name: "Hannah", age: 37, gender: "Female", salary: 5200 },
  { id: 9, name: "Ian", age: 26, gender: "Male", salary: 3700 },
  { id: 10, name: "Julia", age: 30, gender: "Female", salary: 4600 },
  { id: 11, name: "Kevin", age: 45, gender: "Male", salary: 6100 },
  { id: 12, name: "Luna", age: 24, gender: "Female", salary: 3400 },
  { id: 13, name: "Mike", age: 33, gender: "Male", salary: 4300 },
  { id: 14, name: "Nora", age: 27, gender: "Female", salary: 3900 },
  { id: 15, name: "Oscar", age: 39, gender: "Male", salary: 5400 },
  { id: 16, name: "Priya", age: 31, gender: "Female", salary: 4800 },
  { id: 17, name: "Quinn", age: 23, gender: "Non-binary", salary: 3200 },
  { id: 18, name: "Ryan", age: 36, gender: "Male", salary: 5000 },
  { id: 19, name: "Sela", age: 29, gender: "Female", salary: 4100 },
  { id: 20, name: "Tom", age: 34, gender: "Male", salary: 4700 }
];

  return (
    <div>

        <Mycontext.Provider value={userData}>
            <Usecontext/>
        </Mycontext.Provider>
      
    </div>
  )
}

export default Provide

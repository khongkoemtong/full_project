import React from 'react'
import Usestate from '../components/Usestate'
import Card from '../components/Card'

function StateProp() {

    let data = [
        { "id": 1, "name": "Sophea", "age": 22, "gender": "female", "email": "sophea.dev@example.com", "image": "https://randomuser.me/api/portraits/women/1.jpg" },
        { "id": 2, "name": "Vannak", "age": 28, "gender": "male", "email": "vannak_backend@tech.kh", "image": "https://randomuser.me/api/portraits/men/2.jpg" },
        { "id": 3, "name": "Boren", "age": 20, "gender": "non-binary", "email": "boren.designer@studio.com", "image": "https://randomuser.me/api/portraits/lego/1.jpg" },
        { "id": 4, "name": "Dara", "age": 24, "gender": "male", "email": "dara.work@gmail.com", "image": "https://randomuser.me/api/portraits/men/4.jpg" },
        { "id": 5, "name": "Sreyneang", "age": 21, "gender": "female", "email": "sreyneang.j@outlook.com", "image": "https://randomuser.me/api/portraits/women/5.jpg" },
        { "id": 6, "name": "Chantra", "age": 30, "gender": "male", "email": "chantra.pro@company.com", "image": "https://randomuser.me/api/portraits/men/6.jpg" },
        { "id": 7, "name": "Malis", "age": 19, "gender": "female", "email": "malis_test@gmail.com", "image": "https://randomuser.me/api/portraits/women/7.jpg" },
        { "id": 8, "name": "Narin", "age": 25, "gender": "male", "email": "narin.dev@debian.org", "image": "https://randomuser.me/api/portraits/men/8.jpg" },
        { "id": 9, "name": "Kallyane", "age": 23, "gender": "female", "email": "kally_ui@design.io", "image": "https://randomuser.me/api/portraits/women/9.jpg" },
        { "id": 10, "name": "Rithy", "age": 27, "gender": "male", "email": "rithy.sys@cloud.com", "image": "https://randomuser.me/api/portraits/men/10.jpg" }
    ]
    return (
        <div>
    <h1 className='text-7xl text-center'>USESTATE</h1>
            <Usestate />



            <h1 className='text-center text-8xl'>PROP</h1>
            {
                data.map(e=>(
                    <Card name={e.name} age={e.age} gender={e.gender} email={e.email} image={e.image}/>
                ))
            }


        </div>
    )
}

export default StateProp

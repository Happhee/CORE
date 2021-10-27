import '../css/Student.css'
import React, { useState } from 'react';

function Student() {
    let [num, setNum] = useState(0);
    console.log('학생렌더');

    return (

        <div className='mainpage'>
            <button onClick={() => {
                setNum(num++);
            }}>클릭증가</button>

            <button onClick={() => {
                setNum(num--);
            }}>클릭감소</button>
            <div>
                {num}
            </div>
        </div>
    );

}

export default Student;
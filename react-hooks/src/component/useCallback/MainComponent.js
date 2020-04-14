import React,{useState, useCallback} from 'react';
import Count from './Count';
import Button from './Button';
import Title from './Title';

function MainComponent() {
    let [age, setAge] = useState(0);
    let [salary, setSalary] = useState(50000);

    let incrementAge = useCallback(()=>{
        return setAge(age + 1);
    }, [age])

    let incrementSalary = useCallback(()=>{
        return setSalary(salary + 1000);
    }, [salary])
    
    return (
        <div>
            <Title/>
            <Count text="age" value={age} />
            <Button text="incrementAge" handleClick={incrementAge} />
            <Count text="salary" value={salary} />
            <Button text="incrementSalary" handleClick={incrementSalary} />
        </div>
    )
}

export default MainComponent;

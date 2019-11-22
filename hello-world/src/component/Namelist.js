import React from 'react'
import {persons} from './persons'
import PersonDescrp from './perosonDescrep';

export function Namelist() {
    const personList = persons.map((person, index) => (<PersonDescrp key={index} pirate={person} />));
    return (
        <div>
                {
                    personList
                }
                <button onClick={addByTop(persons)}>Add element to Top</button>
        </div>
    )

     function addByTop(persons){
        let newElem = {
            name : 'franky',
            devilFruit: 'Cyborg',
            pirate: 'strawHat',
            bounty: '10000000'
        }
    
        const newList = [newElem, ...persons];
    
        console.log(newList);
        persons = newList;
    }
}




import React from 'react'

function personDescrep({pirate}) {
    console.log(pirate);
    return (
        <div>
            <h2>hello {pirate.name}. Your ability is {pirate.devilFruit}. Your bounty is {pirate.bounty}</h2>
        </div>
    )
}

export default personDescrep

import React from 'react';
import LinkButton from '../styled/LinkButton';
import Autocomplete from '../styled/Autocomplete';
export default function PageOne() {
    return (
        <div>
            <h1>PAGE ONE</h1>

            <Autocomplete
                suggestions={[
                "Alligator",
                "Bask",
                "Crocodilian",
                "Death Roll",
                "Eggs",
                "Jaws",
                "Reptile",
                "Solitary",
                "Tail",
                "Wetlands"
            ]}
            />



            <LinkButton link={'/'} linkName={'HOME'}/>
        </div>
    )
}

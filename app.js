import React, { useEffect, useRef, useState } from "react";
import {TextField, Dropdown} from "yarn-design-system-react-components";
import {useForm} from 'react-hook-form';
import { omit } from "ramda";


const App = ({}) => {
const ddpValues={ddp1:[{value:'01',label:'ddp11'},{value:'00',label:'NA'},{value:'02',label:'ddp12'}],
                  ddp2:[{value:'00',label:'NA'},{value:'01',label:'ddp21'}]};
const [options1,setOptions1]=useState([]);
const [value,setValue]=useState([]);

const sortWith_NA_AtTop = (options = [], value = []) => {
   const selectedValues = value ? [ value ].flat().map(({ value }) => value) : [];
 const NA={value:'00',label: 'NA'};

   const selectedOptions = [];
   const unselectedOptions = [];
 
   options.forEach((option) => {
     if (selectedValues.includes(option.value)) {
       selectedOptions.push(option);
     } else {
       unselectedOptions.push(option);
     }
   });
   return selectedValues.includes(NA)?selectedOptions.concat(unselectedOptions):selectedOptions.concat([NA]).concat(unselectedOptions.filter((e)=>NA.value !== e.value)); 
 };

const handleChange=(e)=>{
   setValue(e);
   setOptions1([...options1]);
};
const getOptions=()=>{
   setOptions1(ddpValues['ddp1']);
}
 

   return <div className="test-class">
                 <div  onFocus={getOptions} ><Dropdown  inputInMenu={false} multiple sortOptions={sortWith_NA_AtTop} checkboxesVisible options={options1}  onChange={handleChange} value={value} />
                 </div>
   </div>;
};

export default App;
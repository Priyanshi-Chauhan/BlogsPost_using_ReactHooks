//Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated. So, it improves the readability and reduces the amount of code.

import {useState} from 'react'; 

export function useForminput(initialvalue){
    const[value, setValue] = useState(initialvalue);
    
    function handleChange(e) {
        setValue(e.target.value);
    }
    return {
        value,
        onChange :handleChange
    }
} 
let getCount;

const renderCycle = (stateValue) => {

  
        getCount = () => {
            return stateValue;
        }
    
}

renderCycle(0);


renderCycle(1)

renderCycle(2);
renderCycle(4);

console.log(getCount()); // Prints 2.
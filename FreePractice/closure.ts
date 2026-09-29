function debounce<Args extends unknown[]>(fn: (...args: Args) => void, delay: number){
    let timeout: ReturnType<typeof setTimeout>;
    const debounced = function(...args: Args):void {
        clearTimeout(timeout);
        timeout = setTimeout(()=>{ fn(...args)}, delay)
    }
    debounced.cancel = () => clearTimeout(timeout);
    return debounced; 
}


function click(something: string) {
    console.log(something);
}

const debouncedClick = debounce(click, 500);

debouncedClick("Hello, world!");
debouncedClick("Hello again!");
debouncedClick("And one more time!");
debouncedClick("Final call!");
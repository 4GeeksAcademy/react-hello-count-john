import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let root = ReactDOM.createRoot(document.getElementById('root'))
let counter = 0;

function resetCounter() {
    counter = 0;
}



function renderCounter(){
    const six = Math.floor((counter / 100000) % 10);
    const five = Math.floor((counter / 10000) % 10);
    const four = Math.floor((counter / 1000) % 10);
    const three = Math.floor((counter / 100) % 10);
    const two = Math.floor((counter / 10) % 10);
    const one = Math.floor((counter / 1) % 10);

    root.render(
        <React.StrictMode>
            <Home
                six={six}
                five={five}
                four={four}
                three={three}
                two={two}
                one={one}
                reset={resetCounter}
            />
        </React.StrictMode>
    );

    counter++;
}

renderCounter();
setInterval(renderCounter, 1000);
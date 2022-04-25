import React, { Component } from 'react';
import { Card } from 'primereact/card';
import ReactDOM from 'react-dom/client';
import "./header.style.css"


export const Header = () => {
        return (
                   <div className='header-container'>
                       <Card className='logo-container'>
                            Vacina Pitang
                       </Card>
                   </div>
        )
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>)
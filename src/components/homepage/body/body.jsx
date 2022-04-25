import React, { Component } from 'react';
import "./body.style.css"
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom/client';



export const HomepageBody = () => {
    
    return (
        <div>
            <div className='body-buttons'>
                <span className='create-schedule'>
                    <Button label='Cadastrar Agendamento' onClick={() =>
                    { }}
                        icon="pi pi-plus"></Button>
                </span>
                <span className='list-schedule'>
                    Listar Agendamento
                </span>
            </div>
        </div>
    );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomepageBody/>)
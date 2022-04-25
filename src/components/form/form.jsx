import React, { useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import ReactDOM from 'react-dom/client';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import './form.style.css';



export const FormikFormDemo = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});


    const formik = useFormik({
        initialValues: {
            name: '',
            birthDate: null,
            scheduleDate: null,
            hourDate: null,
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'Nome é obrigatório.';
            }

            if (!data.birthDate) {
                errors.birthDate = 'Data de nascimento é obrigatório.';
            }

            if (!data.scheduleDate) {
                errors.scheduleDate = 'Data do agendamento é obrigatório.';
            }

            if (!data.hourDate) {
                errors.hourDate = 'É necessário escolher um horário.';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            setShowMessage(true);

            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;


    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registration Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Seu agendamento foi registrado para o dia <b>{formData.scheduleDate}</b>, Por favor <b>{formData.name}</b> esteja presente no local as.
                    </p>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">Novo Agendamento</h5>
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Nome*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <Calendar id="birthDate" name="birthDate" value={formik.values.birthDate} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('birthDate') })} />
                                <label htmlFor="birthDate" className={classNames({ 'p-error': isFormFieldValid('birthDate') })} showIcon>Dia do Nascimento*</label>
                            </span>
                            {getFormErrorMessage('birthDate')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <Calendar id="scheduleDate" name="scheduleDate" value={formik.values.scheduleDate} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('scheduleDate') })} />
                                <label htmlFor="scheduleDate" className={classNames({ 'p-error': isFormFieldValid('scheduleDate') })}>Dia do Agendamento*</label>
                            </span>
                            {getFormErrorMessage('scheduleDate')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <Calendar id="hourDate" name="hourDate" value={formik.values.hourDate} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('hourDate') })} timeOnly showTime hourFormat='24'/>
                                <label htmlFor="hourDate" className={classNames({ 'p-error': isFormFieldValid('hourDate') })}>Hora do Agendamento*</label>
                            </span>
                            {getFormErrorMessage('hourDate')}
                        </div>
                   
        
                        <div className="field-checkbox">
                            <Checkbox inputId="accept" name="accept" checked={formik.values.accept} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('accept') })} />
                            <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid('accept') })}>I agree to the terms and conditions*</label>
                        </div>

                        <Button type="submit" label="Submit" className="mt-2" />
                    </form>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FormikFormDemo/>)
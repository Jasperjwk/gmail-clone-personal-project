import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from "./firebase";
import firebase from 'firebase';
import moment from 'moment';



function SendMail() {

    const { register, handleSubmit, watch, errors} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData);
        db.collection("emails").add(
            {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'),
            }
        )
        dispatch(closeSendMessage());
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon
                onClick={() => dispatch(closeSendMessage())}
                className="sendMail__close"/>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                 name='to' 
                 placeholder="To" 
                 type="email" 
                 {...register('to', { required: true })}
                //  ref={register('to', { required: true })}
                //  ref={register({ required: true})}
                required
                 />
                 {/* If errors.to exists, then go ahead and render a
                 p tag which says 'to is required! */}
                 {/* {errors.to && <p className='sendMail__error'>To is Required!</p>} */}

                <input 
                name='subject' 
                placeholder="Subject" 
                type="text"
                {...register('subject', { required: true })}
                // ref={register('subject', { required: true })}
                // ref={register({ required: true})}
                required
                />
                <input
                 name='message'
                 placeholder="Message..." 
                 type="text"
                 className="sendMail__message"
                 {...register('message', { required: true })}
                //  ref={register('message', { required: true })}
                //  ref={register({ required: true})}
                required
                />

                <div className="sendMail__options">
                    <Button 
                    className="sendMail__send"
                    variant="contained"
                    color="primary"
                    type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>

        </div>
    )
}

export default SendMail

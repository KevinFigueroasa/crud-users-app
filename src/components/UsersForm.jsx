import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const UsersForm = ({ addUser, userSelected, deselectProduct, updateUser }) => {

    const { register, handleSubmit, reset} = useForm()

    useEffect(() => {
        if (userSelected !== null){
        // setProductName(productSelected.name)
        // setCategory(productSelected.category)
        // setPrice(productSelected.price)
        // setIsAvailable(productSelected.isAvailable)
        reset(userSelected)
        }
    }, [userSelected])

    const submit = (newUser) => {

        console.log(newUser)
        if (userSelected) {
            updateUser(newUser)
        } else {
            addUser(newUser)
        }
    }

    const clear = () => {
        reset({
            birthday: '',
            email: '',
            first_name: '',
            password: '',
            last_name: ''
        })
        deselectProduct()
    }


    return (
        <div className='back-form'>
            <div className='form-container'>
                <form onSubmit={handleSubmit(submit)}>
                <h1>NEW USER</h1>
                    <div className='input-container'>
                        <label htmlFor="frist-name">Frist Name:</label>
                        <input type="text" id='frist-name' placeholder='Frist name'
                        {...register('first_name')}
                        />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="last-name">Last Name:</label>
                        <input type="text" id='last-name' placeholder='Last name'
                        {...register('last_name')}
                        />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id='password' placeholder='Password'
                        {...register('password')}
                        />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="e-mail">E-mail:</label>
                        <input type="email" id='e-mail' placeholder='Email'
                        {...register('email')}
                        />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="birthday">Birthday:</label>
                        <input type="date" id='birthday'
                        {...register('birthday')}
                        />
                    </div>
                    <button className='submit'>{userSelected ? 'Update':'Create'}</button> {/* Este botón tiene por defecto el atributo type="submit" */}
                    <button className='clear' type="button" onClick={clear}>Clear</button>
                </form>
            </div>
        </div>
    );
};

export default UsersForm;
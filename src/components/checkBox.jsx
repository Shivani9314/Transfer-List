import React from 'react';

const CheckboxList = ({ checkboxes, handleChange }) => {
    return (
        <div  className='flex flex-col gap-10 w-full p-6'>
            {checkboxes.map((checkbox, index) => (
                <label key={index}>
                    <input
                        className='mr-5'
                        type="checkbox"
                        checked={checkbox.checked}
                        onChange={() => handleChange(index)}
                    />
                    {checkbox.label}
                </label>
            ))}
        </div>
    );
};

export default CheckboxList;

import React from 'react'

const GenderCheckbox = ({onGenderboxChange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label htmlFor=""className={'label gap-2 cursor-pointer'}>
                <span className='label-text text-slate-700'>Male</span>
                <input type="radio" name='gender' className='radio border-slate-900' 
                checked={selectedGender=== 'male'}
                onChange={() => onGenderboxChange("male")}
                />
            </label>
        </div>
        <div className='form-control'>
            <label htmlFor=""className={'label gap-2 cursor-pointer'}>
                <span className='label-text text-slate-700'>Female</span>
                <input type="radio" name='gender' className='radio border-slate-900'
                 checked={selectedGender=== 'female'}
                 onChange={() => onGenderboxChange("female")}
                />
            </label>
        </div>

    </div>
  )
}

export default GenderCheckbox

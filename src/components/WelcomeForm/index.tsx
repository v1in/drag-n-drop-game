/* eslint-disable jsx-a11y/label-has-associated-control */
import {FC} from 'react';

import './styles.css';

interface IProps {
  onSubmit: (e?: any) => void;
  onChange?: (e?: any) => void;
  label: string;
  value: string;
  buttonText: string;
}

const WelcomeForm: FC<IProps> = (props) => {
  const {onSubmit, onChange, label, value, buttonText} = props;
  return (
    <form className='block' onSubmit={onSubmit}>
      <div className='field'>
        <label className='label is-size-5'>{label}</label>
        <div className='control mt-6 mb-3'>
          <input
            value={value}
            onChange={onChange}
            className='input input-custom has-text-centered is-size-5 has-text-black'
            type='text'
            placeholder='Your name here'
            required
          />
        </div>
      </div>
      <div className='is-flex is-justify-content-center mt-6'>
        <button type='submit' className='box button is-rounded has-text-link'>
          <span className='icon-text'>
            <span className='has-text-weight-bold'>{buttonText}</span>
            <span className='icon'>
              <svg fill='none' viewBox='0 0 24 24' height='16' width='16'>
                <path
                  d='M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071L13.7071 18.7071C13.3166 19.0976 12.6834 19.0976 12.2929 18.7071C11.9024 18.3166 11.9024 17.6834 12.2929 17.2929L16.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L16.5858 11L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z'
                  fill='currentColor'
                />
              </svg>
            </span>
          </span>
        </button>
      </div>
    </form>
  );
};

export default WelcomeForm;

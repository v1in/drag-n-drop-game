/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import {FC} from 'react';
import {ToasterContext} from './ToasterContext';
import './styles.css';

interface IProps {
  isOpen: boolean;
  isText?: any;
  customBackground?: any;
  width?: number;
  height?: number;
  onClick?: (e?: any) => void;
}

const Toaster: FC<IProps> = (props) => {
  const {
    isOpen = false,
    isText = '',
    onClick,
    customBackground = '#fff',
    width = 300,
    height = 125,
    children,
  } = props;

  return (
    <ToasterContext.Provider value={{open: isOpen, text: isText}}>
      <div
        className={clsx('modal', {'is-active': isOpen})}
        style={{
          maxWidth: `${width}px`,
          maxHeight: `${height}px`,
          transform: 'translateX(-50%) translateY(20px)',
          left: '50%',
        }}>
        <div
          className='modal-background'
          style={{background: customBackground}}
        />
        <div className='modal-content p-3'>
          {isText}
          {children && (
            <div className='is-size-7 is-family-code has-text-weight-bold'>
              {children}
            </div>
          )}
        </div>
        <button className='modal-close' aria-label='close' onClick={onClick} />
      </div>
    </ToasterContext.Provider>
  );
};

export default Toaster;

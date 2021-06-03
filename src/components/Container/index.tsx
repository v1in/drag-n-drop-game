import clsx from 'clsx';
import {FC} from 'react';

interface IProps {
  classes?: string;
}

const Container: FC<IProps> = ({classes, children}) => {
  return (
    <div className={clsx('container is-fullhd p-0', classes)}>
      <div className='block p-0'>
        <div className='columns is-mobile'>{children}</div>
      </div>
    </div>
  );
};

export default Container;

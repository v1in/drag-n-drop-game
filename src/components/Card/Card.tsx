import clsx from 'clsx';
import {FC, useState} from 'react';
import {DropTarget} from 'react-drag-drop-container';

interface IProps {
  classes?: string;
  targetKey?: string;
  message?: string;
  image?: string;
  onDragLeave?: () => void;
}

const Card: FC<IProps> = (props) => {
  const {classes, targetKey, image, onDragLeave} = props;

  const [state, setState] = useState({
    image: '',
  });

  const getImage = state?.image;

  const handleHit = (e) => {
    e.containerElem.style.visibility = 'hidden';
    setState({image: e.dragData.image});
  };

  return (
    <div className={clsx('column m-2 p-0', classes)}>
      <DropTarget
        onHit={handleHit}
        onDragLeave={onDragLeave}
        targetKey={targetKey}
        dropData={{image}}>
        <div className='box p-1'>
          <figure className='image is-128x128 is-drag-image'>
            {state && <img src={getImage} alt='' />}
          </figure>
        </div>
      </DropTarget>
    </div>
  );
};

export default Card;

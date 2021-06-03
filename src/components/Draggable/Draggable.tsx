import clsx from 'clsx';
import {FC} from 'react';
import {DragDropContainer} from 'react-drag-drop-container';

interface IProps {
  classes?: string;
  targetKey?: string;
  image?: string;
  onDragStart?: (e?: any) => void;
  onDrop?: (e?: any) => void;
  disappear?: boolean;

  // @TODO: Remove
  onDrag?: (e?: any) => void;
  onDragEnd?: (e?: any) => void;
  onDragEnter?: (e?: any) => void;
}

const Draggable: FC<IProps> = (props) => {
  const {
    classes,
    image,
    targetKey,
    onDragStart,
    onDrag,
    onDragEnd,
    onDrop,
    onDragEnter,
    disappear,
    children,
  } = props;

  return (
    <div className={clsx(classes)}>
      <DragDropContainer
        targetKey={targetKey}
        dragData={{image}}
        onDragStart={onDragStart}
        onDrag={onDrag}
        onDragEnter={onDragEnter}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        disappearDraggedElement={disappear}>
        <div className='box p-0'>
          {image && (
            <figure className='image is-128x128 is-drag-image'>
              <img src={image} alt='' draggable={false} />
            </figure>
          )}
          {children}
        </div>
      </DragDropContainer>
    </div>
  );
};

export default Draggable;

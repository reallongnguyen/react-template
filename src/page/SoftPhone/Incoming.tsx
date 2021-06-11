import { FC } from 'react';

export interface IncomingProps {
  phoneNumber: string;
  groupName?: string;
  callerName?: string;
}

const Incoming: FC<IncomingProps> = (props) => {
  return (
    <div className='h-[300px] w-[400px] bg-white shadow'>
      <div>{props.groupName}</div>
      {props.callerName ? (
        <div>
          {props.callerName} ({props.phoneNumber})
        </div>
      ) : (
        <div>{props.phoneNumber}</div>
      )}
      <div className='flex justify-center space-x-4'>
        <button>A</button>
        <button>D</button>
        <button>S</button>
      </div>
    </div>
  );
};

export default Incoming;

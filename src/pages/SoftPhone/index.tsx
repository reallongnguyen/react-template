import { FC } from 'react';
import Incoming from './Incoming';

const SoftPhone: FC = () => {
  return (
    <div className='h-full flex space-x-4 p-4'>
      <Incoming
        phoneNumber='0123456789'
        groupName='***toy'
        callerName='Maria'
      />
      <Incoming phoneNumber='202' />
      <Incoming phoneNumber='0123456789' groupName='***dom' />
    </div>
  );
};

export default SoftPhone;

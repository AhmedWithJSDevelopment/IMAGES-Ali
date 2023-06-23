import { useState } from 'react';
// import Avator from '../../../assets/avator.jpg'
import ali7 from '../../../assets/ali7.jpg'
import ali from '../../../assets/ali.jpg'
import ali1 from '../../../assets/ali1.jpg'
import ali2 from '../../../assets/ali2.jpg'
import ali3 from '../../../assets/ali3.jpg'
import ali4 from '../../../assets/ali4.jpg'
import ali5 from '../../../assets/ali5.jpg'
import ali6 from '../../../assets/ali6.jpg'

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <button className='btn' onClick={() => setShowAlert(!showAlert)}>
        toggle alert
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

// const Alert = () => {
//   return <div className='alert alert-danger'>hello world</div>;
// };
const Alert = () => {
  return <div className='users'>
    {/* <img className=''
  style={{ width: '500px', height:'500px',borderRadius: '2px' }}
    src={Avator} alt="Avator" /> */}
    <img className=''
  style={{ width: '350px', height:'350px',borderRadius: '100px' }}
    src={ali7} alt="ali7" />
    <img className=''
  style={{ width: '350px', height:'350px',borderRadius: '100px' }}
    src={ali} alt="ali" />
    <img className=''
  style={{ width: '350px', height:'350px',borderRadius: '100px' }}
    src={ali1} alt="ali1" />
    <img className=''
  style={{ width: '350px', height:'350px',borderRadius: '100px' }}
    src={ali2} alt="ali2" />
    <img className=''
  style={{ width: '350px', height:'350px',borderRadius: '100px' }}
    src={ali3} alt="ali3" />
    <img className=''
  style={{ width: '350px', height:'350px',borderRadius: '100px' }}
    src={ali4} alt="ali4" />
    <img className=''
  style={{ width: '350px', height:'350px',borderRadius: '100px' }}
    src={ali5} alt="ali5" />
    <img className=''
  style={{ width: '350px', height:'350px',borderRadius: '100px' }}
    src={ali6} alt="ali6" />
  </div>;
};
export default ToggleChallenge;

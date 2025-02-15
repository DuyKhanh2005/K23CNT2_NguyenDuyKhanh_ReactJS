import logo from './logo.svg';
import './App.css';
import NdkCompInfor from './components/NdkCompInfor';

function App() {
  return (
    <div className="App">
      <NdkCompInfor ndkname='Nguyễn Duy Khánh'
        ndkdate='13/01/2005'
        ndkmsv='2310900050'
        ndknumber='0345865380'
        ndkclass='K23CNT2' />
    </div>
  );
}

export default App;

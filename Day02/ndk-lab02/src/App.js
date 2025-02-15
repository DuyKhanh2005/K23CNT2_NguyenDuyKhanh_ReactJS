import logo from './logo.svg';
import './App.css';
import NdkCompInfor from './components/NdkCompInfor';

function App() {
  return (
    <div className="App">
      <NdkCompInfor ndkname='nguyenduykhanh'
        ndkngaysinh='13/01/2005'
        ndkmsv='2310900050'
        ndkdienthoai='0345865380'
        ndktenlop='k23cnt2' />
    </div>
  );
}

export default App;

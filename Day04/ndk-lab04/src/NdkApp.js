import NdkClassComp from './components/NdkClassComp';
import NdkFuncComp from './components/NdkFuncComp';
import NdkFuncComp1 from './components/NdkFuncComp1';

function NdkApp() {
  // Object
  const user = {
    fullName: 'Nguyễn Hữu Tuyên',
    age: 20,
    phone: '0234567891'
  };

  return (
    <div className="container border mt-3 bg-white">
      <h1>Demo Component - Props - State</h1>

      <hr />
      <div className='alert alert-danger'>
        {/* Sử dụng function components */}
        <NdkFuncComp name="Duy Khánh" address="87 Yên Xá" company="Yên Xá" />
        <hr />
        <NdkFuncComp name="Huy Thông" address="K23CNT2" company="Fit-NTU" />
      </div>
      <div className='alert alert-info'>
        {/* Truyền user vào component */}
        <NdkFuncComp1 renderInfo={user} />
      </div>
      <NdkClassComp />
      {/* Chuyển dữ liệu từ NdkApp --> NdkClassComp */}
      <NdkClassComp renderName="K23CNT2" renderUser={user} />
    </div>
  );
}

export default NdkApp;

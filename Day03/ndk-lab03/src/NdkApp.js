import NdkJxsExpression from './components/NdkJxsExpression';
import NdkFuncComp from './components/NdkFuncComp';
import NdkClassComp from './components/NdkClassComp';

function NdkApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Day03 - Nguyễn Duy Khánh</h1>


      <NdkJxsExpression />



      <hr />
      {/* sử dụng function components */}
      <NdkFuncComp></NdkFuncComp>

      {/* sử dụng class components */}
      <NdkClassComp></NdkClassComp>
    </div>
  );
}

export default NdkApp;

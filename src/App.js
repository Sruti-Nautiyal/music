import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import Dashboard from './components/dashboard/Dashboard';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const id = sessionStorage.getItem('id')
  const [info, setInfo] = useState({});

  axios
    .get(`https://stg.dhunjam.in/account/admin/${id}`)
    .then((response) => {
      setInfo(response.data.data);
      console.log(info, "hello");
    })
    .catch((error) => {
      //   console.log(error);
    });
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/dashboard' element={<Dashboard name={info.name} location={info.location} />}></Route>
      </Routes>
    </>
  );
}

export default App;

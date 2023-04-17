import MyButton from '../MyButton/MyButton';
import Title from '../Title/Title';

const HelloReact = () => {
  return (
    <>
      <div className='container'>
        <Title title={"Hello React !!!"} color={'blue'}/>
        <Title title={"Hello React 2 !!!"} color={'green'}/>
        <Title title={"Hello React 3 !!!"} color={'red'}/>
        <MyButton
          content={'Login'}
          bgColor={'black'}
          color={'pink'}
          onClick={() => {
            alert('Login Berhasil');
          }}
        />
        <MyButton
          content={'Register'}
          bgColor={'pink'}
          color={'black'}
          onClick={() => {
            alert('Kembali ke Login');
          }}
        />
        <MyButton
          content={'Logout'}
          bgColor={'black'}
          color={'pink'}
          onClick={() => {
            alert('Silahkan Logout');
          }}
        />
      </div>
    </>
  );
};

export default HelloReact;

import './Header.css'

function Header() {
  const myName = 'Tal Duenias';
  return (
    <div className='header'>
      <header>
        <h1>{myName}</h1>
      </header>
      
    </div>
  );
}

export default Header;
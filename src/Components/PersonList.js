import './PersonList.css'
import Person from './Person'

function PersonList(props) {
  
  return (
    
      <div className='personContainer'>
        <Person name='Name : Tal Duenias' city='City : Tel-Aviv' gender='Gender : Female'/>
        <Person name='Name : Dan Duenias' city='City : Tel-Aviv' gender='Gender : male'/>
        <Person name='Name : Ben Duenias' city='City : Tel-Aviv' gender='Gender : male'/>
      
    </div>
  );
}

export default PersonList;
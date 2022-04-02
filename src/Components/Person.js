import './Person.css'

function Person(props) {
  
  return (
    <div className='person'>
      {props.name}<br/>
        {props.city}<br/>
        {props.gender}<br/>
      
      
    </div>
  );
}

export default Person;
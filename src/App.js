import './App.css';

function MyComponent({name, nameforclass, income = 20}){ // Default value can be given here which is used when no value is passed to function.
  return(   // this fuction can only return a single component, that is why we use empty tag to retyrn more than one component.  
    <>      
    <div className={nameforclass}>{name}: ${income}</div>
    <hr/>
    </>
  )
}

function App() {
  return (
    <div id='23' className='Different'>
      Hello 
      <MyComponent name = {"Dev"}  nameforclass={"div1"} income={200}/>
      <MyComponent name={"blud"}  nameforclass={"div2"}/>
      <MyComponent name={"Chatur"}  nameforclass={"div3"} income={310}/> 
      World!!
      <button>Press</button>
    </div>
  );
}

export default App;

import './App';

export default function CustomTest({id,header,body,footer,onclose}){
    return <div className="parent">
        
        <div className="cross-icon">
            <h1>Custome PopUp</h1>
        <span onClick={onclose}>&#x2718;</span>
     </div>
        
     
     <div className="header">
       {header?header:"Header"}
     </div>
     <div className="body">
     {body?body:"Body"}
     </div>
     <div className="footer">
    {footer?footer:"Footer"}

     </div>



    </div>
}
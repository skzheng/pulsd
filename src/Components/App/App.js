import React from 'react';
import Widget from '../Widget/Widget';
import './styles.css';


class App extends React.Component {
 constructor() {
   super();
   this.state = {
   };
 }

 render() {
   return (
     <div>
     <Widget/>
     </div>
   );
 }
}
export default App;
import React, {Component} from 'react'

class Sorting extends Component {
  
    basil=["Z", "A", "Q", "B", "C", "Y", "S", "W" ]
  
//   b=this.state.basil.sort();
  render() {
    // this.state.basil.sort()
    return (
      <div>
        <h1>The sorted array is: </h1>
        <h2>{this.basil.sort().join(' ')}</h2>
      </div>
    )
  }
}
export default Sorting;
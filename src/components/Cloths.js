import React, { Component } from 'react'

export class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
          data: 'jordan'
        }
      }
      componentWillMount(){
        console.log('First this called');
      }
      componentDidMount(){
        this.getData();
      }

      getData(){
        setTimeout(() => {
          console.log('Our data is fetched');
          this.setState({
            data: 'Hello WallStreet'
          })
        }, 1000)
      }
    

    render() {
        return (
            <div>
            {this.state.data}
          </div>
        )
    }
}

export default Detail

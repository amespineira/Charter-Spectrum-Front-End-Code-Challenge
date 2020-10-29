import React from 'react'

class PageNav extends React.Component {
  constructor(props){
    super(props)
    this.onNext=this.onNext.bind(this);
    this.onPrev=this.onPrev.bind(this);
  }
  onNext(){
    console.log("onNext called")
    this.props.onNext()
  }
  onPrev(){
    console.log("onNext called")
    this.props.onPrev()
  }
  render(){

    if(this.props.totalPages-1>this.props.page && this.props.page>0){
      return (
      <div>
        <button onClick={this.onPrev}>Prev</button>
        {this.props.page+1}
        <button onClick={this.onNext}>Next</button>
      </div>
      )
    }else if(this.props.page===0 && this.props.totalPages>1){
      return (
        <div>
          {this.props.page+1}
          <button onClick={this.onNext}>Next</button>
        </div>
      )
    }else if(this.props.page===0){
      return (
        <div>
          1
        </div>
      )
    }
    else{
      return (
        <div>
          <button onClick={this.onPrev}>Prev</button>
          {this.props.page+1}
        </div>
      )
    }

  }
}


export default PageNav

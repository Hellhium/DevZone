import React from 'react'

class CustomCheckbox extends React.Component {
    componentDidMount(){
        if(this.props.state === 1 || this.props.state === true){
            this.refs.inp.checked = true;
            this.refs.inp.indeterminate = false;
        }
        else if(this.props.state === 2){
            this.refs.inp.checked = false;
            this.refs.inp.indeterminate = true;
        }
        else{
            this.refs.inp.indeterminate = false;
            this.refs.inp.checked = false;
        }
    }
    componentDidUpdate(){
        this.componentDidMount();
    }
    render(){
        return <input ref="inp" type="checkbox" onClick={(e)=>this.props.onClick ? this.props.onClick(e) : null}/>
    }
}
export default CustomCheckbox

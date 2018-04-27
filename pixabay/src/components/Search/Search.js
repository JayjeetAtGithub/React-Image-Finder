import React , { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ImageResults from '../ImageResults/ImageResults';
import axios from 'axios';
export default class Search extends Component{

constructor(props){
    super(props);
    this.state = {
        apiUrl : 'https://pixabay.com/api/',
        apiKey : '8823621-db7d8dfab6b9c91a81e0332e4',
        amount : 15,
        searchText : '',
        images : [],
    }
}
onTextChange(e){
    const {value} = e.target;
    this.setState({ searchText : value },()=>{
        
           if(value === '')
           {
               this.setState({images : []});
           }
           else
           {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
            .then((response)=> this.setState({images : response.data.hits}))
            .catch((err)=> console.log(err));
    
           }
    
        });
}
onAmountChange(e,index,value){
    this.setState({ amount : value })
}
render(){
  return (
    <div>
      <TextField 
      value= {this.state.searchText}
      floatingLabelText = "Search for images"
      onChange = {this.onTextChange.bind(this)}
      fullWidth = {true}/>
    <br/>
    <SelectField
          name = 'Amount'
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange.bind(this)}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br/>
        <div className = 'container'>
        {this.state.images.length > 0 ? (<ImageResults images = {this.state.images} />) : null}
        </div>
    </div>
        )
    }
}


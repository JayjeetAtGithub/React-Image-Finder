import React , { Component } from 'react';


export default class ImageResults extends Component{
    constructor(props){
        super(props);
        
    }


    render(){
        const {images} = this.props;
        console.log(images)
        const pics = images.map((img,key) => {
               return <img className='image' width="500" height="300" src = {img.largeImageURL}/>;
        })

        return(
            <div>
                {pics}
            </div>

        );

    }
} 

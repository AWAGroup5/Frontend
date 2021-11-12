import React, { Component } from 'react'
import styles from './modules/addProduct.module.css'
import NavBar from './NavBar'

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: ''
        };
    }

    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeDescription(e) {
        this.setState({ description: e.target.value })
    }
    onChangePrice(e) {
        this.setState({ price: e.target.value })
    }
    isNumberKey = (e) => {          //EI TOIMI
        var charCode = (e.which) ? e.which : e.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }

    onSubmit = e => {
        const errs = [] 
        const file = e.target.file;
    
        const formData = new FormData()
        const types = ['image/png', 'image/jpeg']

        if (types.every(type => file.type !== type)) {
            errs.push(`'${file.type}' is not a supported format`)
            return console.log("??")
        }
    
        if (file.size > 150000) {
            errs.push(`'${file.name}' is too large, please pick a smaller file`)
        }
    
        formData.append(file)
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className={ styles.page }>
                    <div className={ styles.flexbox }>
                        <div className={ styles.container }>
                            <label 
                                htmlFor="name" 
                                className={ styles.text }>
                                Product name:
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Product name" 
                                onChange={ this.onChangeName.bind(this) }>
                            </input>
                        </div>
                        <div className={ styles.container }>
                            <label 
                                htmlFor="description" 
                                className={ styles.text }>
                                Description:
                            </label>
                            <input 
                                type="text" 
                                name="description" 
                                placeholder="Description" 
                                onChange={ this.onChangeDescription.bind(this) }>
                            </input>
                        </div>
                        <div className={ styles.container }>
                            <label 
                                htmlFor="price" 
                                className={ styles.text }>
                                Price:
                            </label>
                            <input 
                                type="number" 
                                name="price" 
                                placeholder="Price" 
                                onKeyPress={ this.isNumberKey.bind(this) }
                                onChange={ this.onChangePrice.bind(this) }>
                            </input>
                        </div>
                        <div className={ styles.container }>
                            <label 
                                htmlFor="image" 
                                className={ styles.text }>
                                Image:
                            </label>
                            <input 
                                type="file" 
                                accept="image/png, image/jpeg"
                                id="single">
                            </input>
                        </div>
                    </div>
                    <div className={ styles.buttoncontainer }>
                        <button 
                            className={ styles.button }
                            onClick={ this.onSubmit.bind(this) }>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

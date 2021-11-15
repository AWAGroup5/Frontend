import React, { Component } from 'react'
import styles from './modules/addProduct.module.css'
import NavBar from './NavBar'
import Footer from './Footer';
import axios from 'axios';

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: '',
            image: null,
            nameE: false,
            descriptionE: false,
            priceE: false,
            formatE: false,
            sizeE: false
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
    onChangeIMG = (e) => {
        this.setState({ image: e.target.files[0] })
    }
    isNumberKey = (e) => {          //EI TOIMI
        var charCode = (e.which) ? e.which : e.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }

    onSubmit = (e) => {
        const errs = [] 
        const file = this.state.image;

        if (file !== undefined && file !== null) {
            const types = ['image/png', 'image/jpeg']

            if (types.every(type => file.type !== type)) {
                errs.push(`'${file.type}' is not a supported format`)
                return this.setState({ formatE: true })
            }
        
            if (file.size > 150000) {
                errs.push(`'${file.name}' is too large, please pick a smaller file`)
                return this.setState({ sizeE: true })
            }
        }
        
        if (this.state.name === ''){
            this.setState({ nameE: true })
        } else this.setState({ nameE: false })

        if (this.state.description === ''){
            this.setState({ descriptionE: true })
        } else this.setState({ descriptionE: false })

        if (this.state.price === ''){
            this.setState({ priceE: true })
        } else this.setState({ priceE: false }, () => this.sendToAPI())
        
    }

    sendToAPI() {
        if (this.state.nameE !== true && this.state.descriptionE !== true && this.state.priceE !== true) {
            let productObject = {
                name: this.state.name,
                description: this.state.description,
                price: this.state.price,
            }
            console.log(productObject)  //SEND THIS TO API

            axios.post('http://localhost:4000/products/create', productObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

            if (this.state.image !== null) {
                axios.post('http://localhost:4000/images', this.state.image)
                .then((res) => {
                    console.log(res.data)
                }).catch((error) => {
                    console.log(error)
                });
            }
            this.resetValues();
        }
    }

    resetValues() {
        var var1 = document.getElementById("name");
        var var2 = document.getElementById("description");
        var var3 = document.getElementById("price");
        var var4 = document.getElementById("single");

        var1.value = '';
        var2.value = '';
        var3.value = '';
        var4.value = null;
        this.setState({ name: '' });
        this.setState({ description: '' });
        this.setState({ price: '' });
        this.setState({ image: null });
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className={ styles.page }>
                    <div className={ styles.flexbox }>
                        <div className={ styles.container }>
                            <label 
                                htmlFor="name">
                                Product name:
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="Product name" 
                                onChange={ this.onChangeName.bind(this) }>
                            </input>
                        </div>
                        {
                            this.state.nameE ? <div className={ styles.error }>Insert name</div>: null
                        }
                        <div className={ styles.container }>
                            <label 
                                htmlFor="description">
                                Description:
                            </label>
                            <input 
                                type="text" 
                                id="description" 
                                placeholder="Description" 
                                onChange={ this.onChangeDescription.bind(this) }>
                            </input>
                        </div>
                        {
                            this.state.descriptionE ? <div className={ styles.error }>Insert description</div>: null
                        }
                        <div className={ styles.container }>
                            <label 
                                htmlFor="price">
                                Price:
                            </label>
                            <input 
                                type="number" 
                                id="price" 
                                placeholder="Price" 
                                onKeyPress={ this.isNumberKey.bind(this) }
                                onChange={ this.onChangePrice.bind(this) }>
                            </input>
                        </div>
                        {
                            this.state.priceE === true ? <div className={ styles.error }>Input number</div>: null
                        }
                        <div className={ styles.container }>
                            <label 
                                htmlFor="image">
                                Image:
                            </label>
                            <input 
                                type="file" 
                                accept="image/png, image/jpeg"
                                id="single"
                                onChange={ this.onChangeIMG.bind(this) }>
                            </input>
                        </div>
                        {
                            this.state.formatE ? <div className={ styles.error }>Wrong format</div>: null
                        }
                        {
                            this.state.sizeE ? <div className={ styles.error }>Too big file</div>: null
                        }
                    </div>
                    <div className={ styles.buttoncontainer }>
                        <button 
                            className={ styles.button }
                            onClick={ this.onSubmit.bind(this) }>
                            Submit
                        </button>
                    </div>
                </div>
                <div className={ styles.spacer }></div>
                <Footer />
            </div>
        )
    }
}

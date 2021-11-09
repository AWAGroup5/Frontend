import React from 'react'
import NavBar from './NavBar'
import AllRestaurants from './AllRestaurants'
import Footer from './Footer'
import styles from './Home.module.css'
import restaurantdata from './restaurantdata.json'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: restaurantdata.data,
            findString: ""
        }
    }

    whenSearching = (event) => {
        this.setState({ findString: event.target.value });
    }

    render() {
        return (
            <><NavBar />
            <div className= { styles.spacer }></div>
            <div className={ styles.search }>
                <div className={ styles.searchText }>
                Search <div className={ styles.bar }><input 
                            className={ styles.innerbar }
                            type="text" 
                            placeholder="Search for restaurant"
                            onChange={ this.whenSearching } 
                            value={ this.state.findString }
                        /></div>
                </div>
                <img src="BigFood.png" alt="Food" className={ styles.image }/>
            </div>
            <AllRestaurants
              items={ this.state.items.filter((item) => item.name.includes(this.state.findString)) }
              />

            <Footer />
            </>
        )
    }
}

export default Home;
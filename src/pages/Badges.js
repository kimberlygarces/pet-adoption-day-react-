import React from 'react';
import avatar from '../images/mascotas.jpg'
import '../styles/Badges.css'
import BadgesList from '../components/BadgeList';
import { Link } from 'react-router-dom'
import PageLoading from '../components/pageLoading';
import PageError from '../components/pageError';
import api from '../api'

class Badges extends React.Component{
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        this.fetchData()
    }
    fetchData = async () => {
        this.setState({loading: true, error: null});
        try{
            const data = await api.badges.list();
            this.setState({loading: false, data: data})
        }catch(error){
            this.setState({loading: false, error: error})
        }
    }
    
    render(){
        if( this.state.loading == true){
            return  (
                <div className="">
                  <PageLoading/>
                </div>           
                )
        }
        if( this.state.error){
            return  (
            <div className="">
              <PageError error={this.state.error} />
            </div>           
            )
        }


        return(
        <React.Fragment>
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={avatar} alt="Conf"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Badges__container">
                <div className="Badges__buttons">
                    <Link to="/badges/new" className="btn btn-primary">
                        New Badge
                    </Link>
                </div>
                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data}/>
                   
                    </div>
                </div>
            </div>
        </React.Fragment>
        
        );
    }

}

export default Badges;
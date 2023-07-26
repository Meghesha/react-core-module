import React from 'react';
import india from '../assets/img/india.avif'
import usa from '../assets/img/usa.avif'
import japan from '../assets/img/japan.avif'
import dubai from '../assets/img/dubai.avif'
import TourCard from './TourCard';


class TourContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tours : [ 'india' , 'usa' , 'japan' , 'dubai']
        }   
    }
    render() {
        return (
            <React.Fragment>
                <section className='p-3'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <TourCard tourImg={india} tourName={this.state.tours[0]}/>                              
                            </div>
                            <div className="col-md-3">
                                <TourCard tourImg={usa} tourName={this.state.tours[1]}/> 
                            </div>
                            <div className="col-md-3">
                                <TourCard tourImg={japan} tourName={this.state.tours[2]}/> 
                            </div>
                            <div className="col-md-3">
                                <TourCard tourImg={dubai} tourName={this.state.tours[3]}/> 
                            </div>
                        </div>
                    </div>
                </section>
                
            </React.Fragment>
        );
    }
};
export default TourContainer;
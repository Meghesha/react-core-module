import React from 'react';

class TourCard extends React.Component{
    render() {
        return (
            <React.Fragment>
                <div className="card">
                   <img src={this.props.tourImg} alt="" className='img-fluid img-thumbnail' style={{height:'175px'}} />
                   <div className="card-body">
                       <p className='h4 card-title'>{this.props.tourName}</p>
                       <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi molestiae expedita quas nihil velit, quidem architecto ex veritatis dolor?</p>
                       <button className="btn btn-dark btn-sm">Book Now</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default TourCard;

import React from 'react';


class Card extends React.Component {

    render() {
        
    var imgOrder = 0;
    if(this.props.imgAlign === 'right') {
        imgOrder = 12;
    }
        return (
            <div className="card mb-3">
                <div className="row g-0">
                    <div className={"col-md-4 order-sm-" + imgOrder}>
                        <img src={this.props.imgSrc} class="img-fluid rounded-start" alt={this.props.imgAlt} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.cardTitle}</h5>
                            <p className="card-text">{this.props.cardText}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
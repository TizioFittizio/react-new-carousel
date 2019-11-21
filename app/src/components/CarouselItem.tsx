import * as React from 'react';

interface Props {

}

interface State {

}

export class CarouselItem extends React.Component<Props, State> {

    render(){
        return (
            <div className='rnc-carousel-item'>
                {this.props.children}
            </div>
        );
    }

}
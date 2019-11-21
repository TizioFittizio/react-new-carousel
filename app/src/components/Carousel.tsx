import * as React from 'react';
import { CarouselItem } from './CarouselItem';

interface Props {
    children: React.ReactElement<CarouselItem> | React.ReactElement<CarouselItem>[];
}

interface State {

}


export class Carousel extends React.Component<Props, State> {

    render(){
        return this.renderContainer();
    }

    private renderContainer(){
        return (
            <div className='rnc-carousel-container'>
                {this.renderItems()}
            </div>
        );
    }

    private renderItems(){
        return this.props.children;
    }

}
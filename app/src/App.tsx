import React from 'react';
import { Carousel } from './components';
import { CarouselItem } from './components/CarouselItem';

const App: React.FC = () => {

    return (
        <Carousel>
            <CarouselItem>
                <div>1</div>
            </CarouselItem>
            <CarouselItem>
                <div>2</div>
            </CarouselItem>
        </Carousel>
    );
}

export default App;
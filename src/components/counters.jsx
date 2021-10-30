import React from 'react';
import Counter from './counter';
class Counters extends React.Component {
    state = {
        counters : [
            {id:1, value: 0},
            {id:2, value: 1},
            {id:3, value: 3},
            {id:4, value: 2},
        ]
    }
    handleIncrement = counter => {
        const counters = [ ...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter};
        counters[index].value++;
        this.setState( { counters })

    }
    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }
    render() { 
        return <div>
            { this.state.counters.map(counter => 
               <Counter key={ counter.id } onIncrement={ this.handleIncrement } onDelete={ this.handleDelete } counter={ counter } />
            ) }
        </div>;
    }
}
 
export default Counters;
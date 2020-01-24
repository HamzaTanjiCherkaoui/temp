
import React, { Component } from 'react'
import Bubble from './Bubble'
class Disscussion extends Component {


    initialPosition = true


    pickSide = (currentIndex, currentUsername) => {
        const previousIndex = currentIndex === 0 ? 0 : currentIndex - 1;

        if (this.props.messages[previousIndex].username !== currentUsername)
            this.initialPosition = !this.initialPosition;
        return this.initialPosition;
    }
    render() {
        return (
            <div className="container">
                {this.props.messages.map(({ username, time, content }, i) => (

                    <Bubble
                        username={username}
                        time={time}
                        orientation={this.pickSide(i, username) ? "right" : "left"}
                    >
                        {content}
                    </Bubble>
                ))}

            </div>
        );
    }
}

export default Disscussion;

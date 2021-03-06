import React from 'react';
import ReactDOM from 'react-dom';
import videojs from 'video.js';

const vjsComponent = videojs.getComponent('Component');

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isFav: props.isFav || false
    };
    console.log(props)
  }

  callback = () => {
    this.setState({
      isFav: !this.state.isFav
    }, this.props.callback())
  }

  render() {
    return (
      <div style={{ ...this.props.style, color: this.state.isFav ? "red" : "white" }} onClick={() => this.callback()}>
        {this.props.text}
      </div>
    );
  }
}

class toDo extends vjsComponent {

  constructor(player, options) {
    super(player, options);
    console.log(player, options)

    this.options = options;
    /* Bind the current class context to the mount method */
    this.mount = this.mount.bind(this);

    /* When player is ready, call method to mount React component */
    player.ready(() => {
      console.log(player.getChild('controlBar'))

      this.mount();
    });

    /* Remove React root when component is destroyed */
    this.on("dispose", () => {
      ReactDOM.unmountComponentAtNode(this.el())
    });
  }

  mount() {
    ReactDOM.render(<Content vjsComponent={this} {...this.options} />, this.el());
  }
}

vjsComponent.registerComponent('toDo', toDo);

export default toDo;
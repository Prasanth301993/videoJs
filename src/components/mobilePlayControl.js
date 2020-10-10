import React from 'react';
import ReactDOM from 'react-dom';
import videojs from 'video.js';
import { ReactComponent as Forward } from '../images/mobile-forward.svg';
import { ReactComponent as Reverse } from '../images/mobile-backward.svg';
import { ReactComponent as Play } from '../images/mobile-play.svg';
import { ReactComponent as Pause } from '../images/mobile-pause.svg';

const vjsComponent = videojs.getComponent('Component');

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            enable:true,
            play:true
        }
    }

    componentDidMount() {
        
        let that=this
        const { player } = this.props;
        player.on('play', function () {
            that.setState({enable:false,play:false})
        });
        player.on('ended', function () {
            that.setState({enable:true,play:true})
        })
        player.on('pause', function () {
            that.setState({enable:true,play:true})
        })
        player.on('mouseout', function () {
            that.setState({enable:false})
        })
        
        player.on('mouseover', function () {
            that.setState({enable:true})
        })
        
        player.on('touchstart', function() {
            if (!that.state.play) {
                that.setState({enable:true,play:false})
            }
            
          });
    }

    Event = (mode) => {

        const { player } = this.props;
        if (mode == "rewind") {
            player.currentTime(player.currentTime() - 15);
        }
        else if (mode == "forward") {
            player.currentTime(player.currentTime() + 15);
        }
        else if(mode=="play"){
            player.play();
        }
        else{
            player.pause();
        }
    }

    render() {
        const{play,enable}=this.state;
        return (
            <div className={this.props.className && this.props.className.join(' ')} style={{ ...this.props.style,display:this.state.enable?"flex":"none" }} >
                <div className={"mobile-rewind-play-forward"} ><Reverse onClick={() => this.Event("reverse")} /></div>
        <div className={"mobile-rewind-play-forward"} >{play?<Play onClick={() => this.Event("play")} />:<Pause onClick={() => this.Event("pause")} />}</div>
                <div className={"mobile-rewind-play-forward"} ><Forward onClick={() => this.Event("forward")} /></div>
            </div>
        );
    }
}

class MobilePlayControl extends vjsComponent {

    constructor(player, options) {
        super(player, options);
        console.log(player, options)
        this.player = player

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
        ReactDOM.render(<Content vjsComponent={this} {...this.options} player={this.player} />, this.el());
    }
}

vjsComponent.registerComponent('MobilePlayControl', MobilePlayControl);

export default MobilePlayControl;
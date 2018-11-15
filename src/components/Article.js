import React, {Component, PureComponent} from "react"

class Article extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    componentWillMount() {
        console.log("-- will mount --")
    }


    componentWillUpdate() {
        console.log("--- will update ---")
    }

    render() {
        const {article, isOpen, onBtnClick} = this.props
        const body = isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style={{width:"50%"}}>
                <div className="card-header">
                    <h2 onClick={this.incrementCounter}>
                        {article.title}
                        clicked {this.state.counter}
                        <button className="btn btn-primary btn-lg float-right" onClick={onBtnClick}>
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        creation date {(new Date()).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }



    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })

    }

    incrementCounter = () => {

    }
}

export default Article
import React from 'react';

class Article extends React.Component {
    constructor(props) {
        super(props);



        this.state = {
            isButtonOpen: true
        };

        //this.bntCloseClick=this.bntCloseClick.bind(this);

    }

   

    render() {
        const {article} = this.props;
        console.log('---article---',article);
        const body=<section>{article.text}</section>
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.bntCloseClick}>
                        {this.state.isButtonOpen ? 'close' : 'open' }  
                    </button>
                </h2>
                {body}
                <h3>creation data: {(new Date(article.date)).toDateString()}</h3>
            </div>
            
        );
    }
    bntCloseClick = () => {
        console.log("click btn");
        this.setState({
            isButtonOpen: !this.state.isButtonOpen
        });
    }
    // bntCloseClick = function() {
    //     console.log("click btn");
    //     this.setState({
    //         isButtonOpen: !this.state.isButtonOpen
    //     });
    // }
} 



export default Article;
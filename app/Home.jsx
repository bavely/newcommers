import React from "react";
import ReactDOM from "react-dom";
import helpers from "./utils/helpers.jsx"
import Slider from "react-slick";


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bbcnews: [{
                author: " ",
                description: " ",
                publishedAt: " ",
                title: " ",
                url: " ",
                urlToImage: " "
            }],
            arabinews:[{
                title: " ",
                    img: " ",
                    link: " ",
                    article:" "
            }]
        }

        this.engNews = this.engNews.bind(this);
        this.arabNews=this.arabNews.bind(this);
    }


    engNews() {
        helpers.bbcCall().then((response) => {
            helpers.nytCall().then((nyresponse)=>{
            let bbcres = response.articles;
            let nytres = nyresponse.articles;
            let allres = bbcres.concat(nytres);
            console.log(allres);
            this.setState({
                bbcnews: allres
            })
        })
    })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }

    arabNews(){
        helpers.alAhram().then((ahrres) => {
            helpers.alMasry().then((masryres)=>{
                ahrres=ahrres.data;
                masryres=masryres.data;
                let allres = ahrres.concat(masryres);
            console.log(allres);
            this.setState({
                arabinews: allres
            })
        })
    })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }

    componentWillMount() {
        this.engNews();
        this.arabNews();

    }


    render() {
        var settings = {
            dots: true,
            autoplay: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            className: "trac",
            centerMode: true,
            useCSS: true,
            arrows: true,
            pauseOnHover: true,
            centerMode: true
        };

        var engnews = this.state.bbcnews;
        var aranews =this.state.arabinews;
        console.log( this.state.arabinews)
        return (
            <div className="content" id="main" >
                
                    {/* English News */}
                    <div className="col-md-12">
                        <div className="page-header cattitles">
                            <h2>Featured News</h2>
                        </div>
                        <Slider {...settings} >
                            {engnews.map((data) =>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12 caro" >
                                        <a href={data.url}><div ><img id="test" src={data.urlToImage} className="img-responsive"/><h4>{data.title}</h4></div></a>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                    {/* Arabic News */}
                    <div className="row arabic">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="page-header cattitles">
                            <h2>Featured News</h2>
                        </div>
                        <Slider {...settings} >
                            {aranews.map((data) =>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 caro col-xs-12" >
                                        <a href={data.link} target= "_blank"><div ><img id="test" src={data.img} className="img-responsive" /><h4>{data.title}</h4></div></a>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                    </div>
                </div>
           
        );
    }
}

export default Home;
import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home.jsx"
var Link = require("react-router").Link;
class Frame extends React.Component {
    constructor(props){
    super(props)

    this.state={
        test:" "
    }

}

    render() {
        return (
            <div>
            <div className="wrapper">
                <div className="container-fluid page-header text-center header" >
                    <div className="row">
                        <div className="col-md-4">
                            <img src="./imags/b.png" className="img-rounded EGY" />
                        </div>
                        <div className="col-md-4">
                            <img src="./imags/LOGO.png" className="img-rounded logo" />
                        </div>
                        <div className="col-md-4">
                            <img src="./imags/c.png" className="img-rounded US" />
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-default" data-spy="affix" data-offset-top="300">
                    <div className="container-fluid">
                        {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#"><img src="./imags/LOGO.png" className="img-rounded brand" /></a>
                        </div>
                        {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                            <li className="mainLi"><Link to="Home"><span className="glyphicon glyphicon-home" aria-hidden="true"></span> Home | الرئيسية</Link></li>
                                <li className="mainLi"><a href="#">News | اخبار</a></li>
                                <li className="mainLi"><a href="#">About Us | اعرف عنا</a></li>
                                <li className="dropdown mainLi">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Advertisements | اعلانات <span ></span></a>
                                    <ul className="dropdown-menu">
                                        <li className="menuEle"><a href="#">Action</a></li>
                                        <li className="menuEle"><a href="#">Another action</a></li>
                                        <li className="menuEle"><a href="#">Something else here</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li className="menuEle"><Link to="Ads">Creat An Ad. | أضف إعلان</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="navbar-form navbar-right">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="contentbody">
            <div className="container">
        <div className="row">
            
            {this.props.children}
            </div>
            </div>
            </div>
            <div className="push"></div>
{/* --------------------------Footer----------------------- */}
                 <footer>
    <div className="footer" id="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                    <h3> Lorem Ipsum </h3>
                    <ul>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                    </ul>
                </div>
                <div className="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                    <h3> Lorem Ipsum </h3>
                    <ul>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                    </ul>
                </div>
                <div className="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                    <h3> Lorem Ipsum </h3>
                    <ul>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                    </ul>
                </div>
                <div className="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                    <h3> Lorem Ipsum </h3>
                    <ul>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                    </ul>
                </div>
                <div className="col-lg-3  col-md-3 col-sm-6 col-xs-12 ">
                    <h3> Lorem Ipsum </h3>
                    <ul>
                        <li>
                            <div className="input-append newsletter-box text-center">
                                <input type="text" className="full text-center" placeholder="Email " />
                                <button className="btn  bg-gray" type="button"> Lorem ipsum <i className="fa fa-long-arrow-right"> </i> </button>
                            </div>
                        </li>
                    </ul>
                    <ul className="social">
                        <li> <a href="#"> <i className=" fa fa-facebook">   </i> </a> </li>
                        <li> <a href="#"> <i className="fa fa-twitter">   </i> </a> </li>
                        <li> <a href="#"> <i className="fa fa-google-plus">   </i> </a> </li>
                        <li> <a href="#"> <i className="fa fa-pinterest">   </i> </a> </li>
                        <li> <a href="#"> <i className="fa fa-youtube">   </i> </a> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="container">
            <p className="pull-left"> Copyright © Footer 2014. All right reserved. </p>
            <div className="pull-right">
                <ul className="nav nav-pills payments">
                    <li><i className="fa fa-cc-visa"></i></li>
                    <li><i className="fa fa-cc-mastercard"></i></li>
                    <li><i className="fa fa-cc-amex"></i></li>
                    <li><i className="fa fa-cc-paypal"></i></li>
                </ul> 
            </div>
        </div>
    </div>
</footer>
            </div>
        );
    }
}

export default Frame;
import React from "react";
import ReactDOM from "react-dom";
class Ads extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      renCatclicked: false,
      renTadclicked: false
    }
    this.clickRencat = this.clickRencat.bind(this);
    this.clickRented = this.clickRented.bind(this);
  }

  renScat() {

    return (
      //  {/*className="container" id="page-wrapper" className="col-md-8"*/}
      <div className="col-md-8" id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-lg-12">
              <h2>YOUR ADVERTISEMENT DASHBOARD</h2>
            </div>
          </div>
          <hr />
          {/* <!-- /. ROW  --> */}
          <div className="row text-center pad-top">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div className="div-square">
                <a href="blank.html">
                  <i className="fa fa-car fa-5x"></i>
                  <h4>vehicles | مركبات</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div className="div-square">
                <a href="blank.html">
                  <i className="fa  fa-home fa-5x"></i>
                  <h4>Houses | منازل </h4>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /. ROW  --> */}
          <div className="row text-center pad-top">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div className="div-square">
                <a href="blank.html">
                  <i className="fa fa-briefcase fa-5x"></i>
                  <h4>Jobs Opening | وظائف شاغرة</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div className="div-square">
                <a href="blank.html">
                  <i className="fa  fa-minus-square fa-5x"></i>
                  <h4>Other | اخرى</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" onClick={this.clickRented}>Next </button>

      </div>

    )
  }

  renTad() {
    return (
      <div className="col-md-8" id="page-wrapper" >
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h2>BLANK PAGE </h2>
            </div>
          </div>
          {/* <!-- /. ROW  --> */}
          <hr />

          {/* <!-- /. ROW  -->            */}
        </div>
        {/* <!-- /. PAGE INNER  --> */}
      </div>


    )
  }

  clickRencat(event) {
    event.preventDefault();
    this.setState({
      renCatclicked: true,
      renTadclicked: false,
      renAcclicked:false,
      rendApclicked:false,
      renPasclicked:false
    })
  }

  clickRented(event) {
    event.preventDefault();
    this.setState({
      renCatclicked: false,
      renTadclicked: true,
      renAcclicked:false,
      rendApclicked:false,
      renPasclicked:false
    })
  }

  clickRenac(event) {
    event.preventDefault();
    this.setState({
      renCatclicked: false,
      renTadclicked: false,
      renAcclicked:true,
      rendApclicked:false,
      renPasclicked:false
    })
  }

  render() {
    return (
      // id="wrapper"
      <div id="adswraper">
        <div className="col-md-4">
          <nav className="navbar-default navbar-side sidnavigation" role="navigation">
            <div className="sidebar-collapse">
              <ul className="nav" id="main-menu">
                <li className="sideli">
                  <a href="#" onClick={this.clickRencat}><i className="fa fa-desktop "></i>Select Categry | اختر الفئة</a>
                </li>
                <li className="sideli">
                  <a href="#" onClick={this.clickRented}><i className="fa fa-table "></i>Title and Discreption | العنوان و الوصف</a>
                </li>
                <li className="sideli">
                  <a href="blank.html"><i className="fa fa-edit "></i>Advertiser Contacts | معلومات الاتصال بالمعلن</a>
                </li>
                <li className="sideli">
                  <a href="#"><i className="fa fa-qrcode "></i>Add Photos | اضف صور</a>
                </li>
                <li className="sideli">
                  <a href="#"><i className="fa fa-bar-chart-o"></i>Prediew and Submit | المراجعة و النشر</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/*<!-- /. NAV SIDE  -->*/}
        {this.state.renCatclicked ? this.renScat() : this.state.renTadclicked ? this.renTad() : "e3mel 7aga tany "}
      </div>

    );
  }
}

export default Ads;
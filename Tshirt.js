import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { FetchTshirts } from '../../actions/TshirtActions'
import TshirtFilter from './TshirtFilter';

class Tshirt extends Component {

  componentWillMount() {
    this.props.FetchTshirts()
  }


  render() {
    const { tshirts } = this.props.tshirts
    // const{availableSizes} = tshirts.availableSizes.join(',')
    console.log(tshirts, 'tsh')
    return (
      <div className="Tshirt-menu">
        <TshirtFilter />
        <div className="tshirts-list">
          <h5><b>Tshirts</b></h5>
          <div className="tshirt-sort">
            <h5><b>Sort</b></h5>
            <span className="sort">Price---Low To High</span>
            <span className="sort">Price---High To Low</span>
          </div>
          <div className="tshirts-list-content">
            {tshirts.map((data) => {
              return (
                <div key={data.id} className="tshirts-list-data">
                  <img src='./tshirt/user5.jpg' alt={data.title} />
                  <div className="tshirt-discript">
                    <p className="style">{data.style}</p>
                    <h6 className="data-title">{data.title}</h6>
                    <p className="price"><i className="fas fa-rupee-sign"></i><b>{data.price}</b></p>
                    <p className="price">Sizes: {data.availableSizes.join(', ')}</p>                    
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tshirts: state.tshirts,
});

export default connect(mapStateToProps, { FetchTshirts })(Tshirt)


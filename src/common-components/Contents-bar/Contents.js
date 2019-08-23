import React, { Component } from 'react'
import './Contents.scss'
import Data from './Categories.json'
import _ from 'lodash'
import { NavLink } from 'react-router-dom'


class Contents extends Component {
    render() {
        return (
            <div className="contents-menu">
                {_.map(Data.navData, (obj, key) => {
                    return (
                        <div className="dropdown" key={obj.title}>
                            <div className="dropbtn"><strong>{obj.title}</strong>
                                <i className="fas fa-chevron-down"></i>
                            </div>

                            {obj.tabs && obj.tabs.map((catelog, key) => {
                                // console.log(catelog.columns, 'obj2')
                                return (
                                    <div className="dropdown-contents" key={key + 1}>
                                        {catelog.columns && catelog.columns.map((cate, i) => {
                                            // console.log(cate, 'title')
                                            return (
                                                <div key={i + 1}>
                                                    {cate && cate.map((item, index) => {
                                                        //console.log(item, 'title')
                                                        return (
                                                            <div key={index + 1}>
                                                            <NavLink to={cate[0].url} ><label>{item.type ? <strong>
                                                                {item.title}</strong> : item.title}
                                                            </label></NavLink>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            )

                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Contents




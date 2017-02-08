/**
 * Created by Liukeyi on 2017/2/8.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchData from '../redux/action'

class AsyncApp extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const { dispatch } = this.props

        // 启动数据请求
        dispatch(fetchData())
    }

    render() {

        return (
            <div>

            </div>
        )
    }
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps)(AsyncApp)
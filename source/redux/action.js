/**
 * Created by Liukeyi on 2017/2/8.
 */
import fetch from 'isomorphic-fetch'
export const REQUEST_POST = 'REQUEST_POST'
export const RECEIVE_POST = 'RECEIVE_POST'

function requestPost() {
    return {
        type: REQUEST_POST
    }
}

function receivePost(dispatch, data) {
    // 临时服务器由于未做数据差分会直接返回数据，为了减少服务器压力采用定时器
    (function(d) {
        setTimeout(function() {
            d(fetchData())
        }, 5000)
    })(dispatch)

    // 正式服务器直接再次请求数据
    //dispatch(fetchData())

    return {
        type: RECEIVE_POST,
        data: JSON.parse(data)
    }
}

export function fetchData() {
    return function(dispatch) {
        dispatch(requestPost())

        const APIAddress = ''
        const request = new Request(
            APIAddress,
            {
                credentials: 'include',
                mode: 'cors'
            }
        )

        return fetch(request)
            .then(response => response.text())
            .then(json => dispatch(receivePost(dispatch, json)))
    }
}
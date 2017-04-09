/**
 * Created by Liukeyi on 2017/2/8.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchData from '../redux/action'
import Autosuggest from 'react-autosuggest'
require('../../less/theme.less');

class AsyncApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        };
    }

    componentWillMount() {
        const { dispatch } = this.props

        // 启动数据请求
        //dispatch(fetchData())
    }

    getSuggestionValue = suggestion => {
        return suggestion.name
    };

    getSuggestion = value => {
        const { suggestion } = this.props;

        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : suggestion
    };

    onChange = (e, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        console.log(value);
    };

    onSuggestionsClearRequested = () => {
        console.log('clear');
    };

    renderSuggestion = (suggestion) => {
        return <span>{suggestion.name}</span>
    };

    render() {
        const { suggestion } = this.props
        const { value } = this.state
        const inputProps = {
            placeholder: 'Test',
            value,
            onChange: this.onChange
        };
        return (
            <div>
                <Autosuggest
                    suggestions={suggestion}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(AsyncApp)
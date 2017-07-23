
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import {  changeDescription, search, alterarTamanho } from './curtiActions'

class CurtiDemaisForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { search, description } = this.props

    }

    render() {
        const { search, description } = this.props
        return (
            <div role='form' className='curtiForm'>
              <Grid cols='12 12 12 12'>
                <Grid cols='12 8 8 8'>
                    <input id='username' className='form-control input-md'
                    onChange={this.props.changeDescription}
                    value={this.props.description}></input>
                </Grid>
                <Grid cols='12 4 4 4'>
                    <Grid cols='12 6'>
                    <button className='btnCustom' onClick={search}>
                    <i className='icon-magnifier'></i> Pesquisar
                    </button>
                    </Grid>
                    <Grid cols='12 6'>
                    <button id='alteraTamanho' className='btnCustom' onClick={() => this.props.alterarTamanho()}><i className='icon-grid'></i> Alterar Tamanho</button> 
                    </Grid>
                </Grid>
              </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.curti.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription, search, alterarTamanho }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CurtiDemaisForm)


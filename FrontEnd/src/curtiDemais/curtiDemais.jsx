import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CurtiDemaisForm from './curtiDemaisForm'
import CurtiDemaisList from './curtiDemaisList'

import { } from './curtiActions'
import Grid from '../template/grid'

class CurtiDeMais extends Component {

  render() {
    return (

  <div>
    <Grid cols="12 12">
    <div className="box-body row">
      <CurtiDemaisForm />
    </div> 
    </Grid>
      <CurtiDemaisList  />
  </div>

    )
  }
}

const mapStateToProps = state => ({description: state.curti.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({  }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CurtiDeMais)


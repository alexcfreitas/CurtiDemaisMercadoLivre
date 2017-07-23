import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { handleViewShot, alterarTamanho } from './curtiActions'

import Grid from '../template/grid'

const CurtiDemaisList = props => {
  const renderShots = () => {
    const list = props.list || []
    return list.map(shot => (
      <Grid key={shot.id} cols={'12 6 4'}>
        <div  className="dribbble">
          <div   className="dribbble-shot">
            <div className="shot-img">
              <img className="img-responsive" src={shot.images.hidpi ? shot.images.hidpi : shot.images.normal }  
               onClick={() => props.handleViewShot(shot)} alt="Sem Imagem"/>
            </div>
          </div>
        </div>
        <Grid cols={'12'}>
          <div className="alignText">
            {shot.title.length > 25 ? (
              <span className="text-left">{ shot.title.substring(0,25) + '...' }</span>
            ) : (
              <span className="text-left">{shot.title}</span>
            )}
              <span className="right">
                 <i className='icon-eye'></i> {shot.views_count} views
              </span>
          </div>
        </Grid>
      </Grid>
    ))
  }


  return (

      <Grid cols='12'>
        <div className="clearfix"></div>
        <div className='row'>
        {renderShots()}
        </div>
      </Grid>
  )
}


const mapStateToProps = state => ({list: state.curti.list})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ handleViewShot, alterarTamanho }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CurtiDemaisList)
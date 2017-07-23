import axios from 'axios'
import React, {Component} from 'react'
import Grid from '../../template/grid'


const URL = 'http://localhost:3003/api/shots'

export default class ShotController extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shot: {},
      images: {},
      user: {},
      likes: 0
    }
    this.refreshShot()
     this.handleLike = this.handleLike.bind(this);
     this.handleVoltar = this.handleVoltar.bind(this);
  }

  refreshShot(){
    const shot = document.URL
    const shotArray = shot.split('/')
    const shotID = shotArray[shotArray.length-1]
    axios.get(`${URL}/${shotID}`)
      .then(resp => this.setState({...this.state, shot: resp.data, images: resp.data.images, user: resp.data.user, likes: resp.data.likes_count}))
  }

  handleLike(){
    const shot = document.URL
    const shotArray = shot.split('/')
    const shotID = shotArray[shotArray.length-1]
    const likeMaisUm = this.state.likes + 1
    console.log(likeMaisUm)
    axios({method: 'put',url: `${URL}/${shotID}`, data: {likes_count: likeMaisUm}}) 
    this.refreshShot()
    $('#changeCssLiked').removeClass().addClass('LikeTrue');   
    console.log($('#changeCssLiked').removeClass().addClass('LikeTrue'));      
    
  }

  handleVoltar(){
    location.href='/#/curtiDemais'
  }

  render() {

    return (

      <Grid key={this.state.shot.id} cols='12'>
        <div className="alignBody">
        <Grid cols='12 8 8 '>
          <div  className="dribbble">
          <div   className="dribbble-shot">
            <div className="shot-img">
               {this.state.images.hidpi ? <img className="img-responsive" src={this.state.images.hidpi} alt="Sem Imagem"/> : <img className="img-responsive" src={this.state.images.normal} alt="Sem Imagem"/>}
              
            </div>
          </div>
        </div>
      </Grid>
      <Grid cols='12 4 4'>
        <div className="row">
          <Grid cols='12 12 12 12'>
            <div className="alignPhoto text-center">
                <img className="photo" src={this.state.user.avatar_url} />
            </div>
            </Grid>
        </div>    
        <div className="row">
                <Grid cols='12 12 12 12'>
          <div className="slat-header text-center">
              <div className="text-center">
                <h1>{this.state.shot.title}</h1>
                <h2 className="shot-byline">
                  <span className="attribution ">
                    <span className="shot-byline-user">Criado por <span className="corPrimary">{this.state.user.name}</span>  em <span className="corPrimary">{this.state.user.location}</span>
                    </span>
                  </span>
                </h2>
            </div>
          </div>
              </Grid>
        </div>
        <div className="row">
          <Grid key={this.state.shot._id} cols='12 12 12 12'>
            <ul  className="tools">
              <li className="fav" onClick={this.handleLike}>
                  <span id="changeCssLiked" className=""><i className='fa fa-heart ' ></i><span>{this.state.likes}</span></span>
              </li>
              <li className="cmnt">
                <i className='fa fa-comments'></i><span> {this.state.shot.comments_count}</span>
              </li>
              <li className="views">
                <i className='fa fa-eye'></i><span>{this.state.shot.views_count}</span>
              </li>
            </ul>
          </Grid>
        </div>
        <div className="row">
          <Grid cols='12 12 12 12'>
            <span className="align-bottom-text-right">
              <button className='btnCustom' onClick={this.handleVoltar}>
              <i className='icon-arrow-left'></i> Voltar</button>
            </span>
          </Grid>
        </div>
      </Grid>
    </div>
      </Grid>
    )
  }
}

import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let { title, source, publishedAt, description, imgurl, newsurl } = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',
                    right:0}}>
                        <span className=" badge rounded-pill bg-success" >
                            {source}
                         </span> 
                            </div>
                    <img src={imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">

                        <h5 className="card-title">{title}
                        </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">{new Date(publishedAt).toGMTString()}</small></p>
                        <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems

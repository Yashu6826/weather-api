import React from 'react'
import './showtemp.css'

export default function showTemp({text}) {
  return (
    <div className='container my-5'>
        <div className='row '>
            <div className='col-md-4 mb-3'>
                <div className='card'>
                    
                    <div className='card-body'>
                        <h5 className='card-title'>Description </h5>
                        <p className='card-text'>{text.description}</p>
                    </div>
                </div>
            </div>

            <div className='col-md-4 mb-3'>
                <div className='card'>
                    
                    <div className='card-body'>
                        <h5 className='card-title'>Temp </h5>
                        <p className='card-text'>{text.temp}</p>
                    </div>
                </div>
            </div>

            <div className='col-md-4 mb-3'>
                <div className='card'>
                    
                    <div className='card-body'>
                        <h5 className='card-title'>Temp Maximum </h5>
                        <p className='card-text'>{text.temp_max}</p>
                    </div>
                </div>
            </div>

            <div className='col-md-4 mb-3'>
                <div className='card'>
                    
                    <div className='card-body'>
                        <h5 className='card-title'>Temp Minimum </h5>
                        <p className='card-text'>{text.temp_min}</p>
                    </div>
                </div>
            </div>

            <div className='col-md-4 mb-3'>
                <div className='card'>
                    
                    <div className='card-body'>
                        <h5 className='card-title'> Humidity</h5>
                        <p className='card-text'>{text.humidity}</p>
                    </div>
                </div>
            </div>

            <div className='col-md-4 mb-3'>
                <div className='card'>
                    
                    <div className='card-body'>
                        <h5 className='card-title'>Sunrise</h5>
                        <p className='card-text'>{text.sunrise}</p>
                    </div>
                </div>
            </div>

            <div className='col-md-4 mb-3'>
                <div className='card'>
                    
                    <div className='card-body'>
                        <h5 className='card-title'>Sunset</h5>
                        <p className='card-text'>{text.sunset}</p>
                    </div>
                </div>
            </div>

            <div className='col-md-4 '>
                <div className='card'>
                    
                    <div className='card-body'>
                        <h5 className='card-title'>Country</h5>
                        <p className='card-text'>{text.country}</p>
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

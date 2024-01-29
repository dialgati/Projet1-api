import React from 'react'

function SousHotels({title, image, lieu, count}) {
  return (
    <div className='col-md-3 mt-5 '>
      <div class="card border-0 shadow-sm">
     <img src={image} class="img-fluid" alt="..."/>
  <div class="card-body">
  <p className='dsd'>{lieu}</p>
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{count}</p>
  </div>
</div>
    </div>
  );
}

export default SousHotels;
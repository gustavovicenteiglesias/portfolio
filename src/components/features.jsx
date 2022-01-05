export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Skills</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-4 col-md-4'>
                  
                  <img src={d.img} alt={d.title}/>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}

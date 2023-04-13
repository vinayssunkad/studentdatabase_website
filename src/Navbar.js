import React from 'react'
import background from '../src/image/images.jpg';
import Copyright from './Copyright';
export default function Nav() {
  return (
    <div>
       <div style={{  backgroundImage: `url(${background})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat:'no-repeat',
                width: '100vw',
                height: '100vh'
              }}> 

    
    
       <nav className="navbar  navbar-expand-lg navbar-light bg-light">
       <div className="container-fluid">
        <a className="navbar-brand" href="#">Data Base<a style={{color:'red'}}></a> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{bsscrollheight:100}}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/*">Home</a>
            </li>

        

            <li className="nav-item ">
              <a className="nav-link"  href="/about">About_Us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                contact_us  
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><a className="dropdown-item" href="https://mail.google.com/mail/?view=cm&fs=1&to=vinayssunkad@outlook.com&su=SUBJECT&body=BODY&" >Gmail</a></li>
                <li><a className="dropdown-item" href="#">+91 8495809698</a></li>
                <li><a className="dropdown-divider"></a></li>
                {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
            
                 </ul>
               </li>
             </ul>
             <div className='ms-5'>
               <a className="navbar-brand" aria-current="page" href="login.html"></a>
               </div>
             {/* <form className="d-flex order-5">
               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
               <button className="btn btn-outline-success"  type="submit">Search</button>
               
             </form> */}
           </div>
         </div>
       </nav>

         {/* <nav className="navbar navbar-dark bg-dark">
           <div className="container-fluid">
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
           </div>
         </nav> */}



  
       <nav class="navbar bg-dark p-1">
      <div class="container-fluid" style={{alignItems:'flex-start'}}>
      <h5 className="text-white h8" style={({ textAlign: "left",fontSize:40 })}>Student DataBase</h5>
    
      <h4 style={({ textAlign: "left",color: 'black',backgroundColor:'#f0ffff' })} > <span className="text-dark" >  A Trusted Database Provider in INDIA</span></h4>
      {/* <h4 className="text-white" style={({ textAlign:"right", fontSize:30 } )}>contact us</h4>
      <h4 className="text-white"  style={({textAlign:" right"})}><a href="https://mail.google.com/mail/?view=cm&fs=1&to=vinayssunkad@outlook.com&su=SUBJECT&body=BODY&">Gmail</a>/+91 8495809698</h4>  */}
      </div>
     </nav>
      
    <Copyright/>
     {/* <Api/> */}

     {/* <div className="collapse" id="navbarToggleExternalContent">
     <div className="bg-dark p-4">
      <h5 className="text-white h4" style={({ textAlign: "left",fontSize:40 })}>Student DataBase</h5> 
      <h5 style={({ textAlign: "left",color: 'black',backgroundColor:'#f0ffff' })} > <span className="text-dark" >  A Trusted Database Provider in INDIA</span></h5>
      <h4 className="text-white" style={({ textAlign:"right", fontSize:30 } )}>contact us</h4>
      <h4 className="text-white"  style={({textAlign:" right"})}><a href="https://mail.google.com/mail/?view=cm&fs=1&to=vinayssunkad@outlook.com&su=SUBJECT&body=BODY&">Gmail</a>/+91 8495809698</h4> 
      </div>
      </div> */}

      </div>
      <div >
      </div>
      </div>
    
  )
}

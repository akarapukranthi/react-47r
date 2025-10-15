import './App.css'

function jsx () {

  var name = "kranthi"
  var greet = "social media app"

  return <div class="par">
        <h1>Parent class</h1>
        <div class="child1">
         <h2>child1</h2>
             <ol>
                <li>SocialMedia
              <ul>
                <li>Intagram is an {greet}</li>
                <li>Youtube</li>
                <li>Facebook</li>
             </ul>
               </li>
             <li>Online Shopping
               <ul>
                <li>Amazon</li>
                <li>Flipkart</li>
                <li>Meesho</li>

             </ul>
           </li>
         </ol>
         </div>
          <div class="child2">
            <h2>child2</h2>
            <h4>hello {name}</h4>
            <h4>{name},how are you</h4>
          </div>
          
       </div>

}

export default jsx
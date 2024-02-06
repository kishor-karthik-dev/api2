

async function vehicles(){
    var res = fetch ("https://parallelum.com.br/fipe/api/v1/carros/marcas")

    res.then((data)=>data.json()).then((data1)=>{
        for (let i=0; i<data1.length; i++){

            var div = document.createElement("div");
            div.innerHTML = ` 
        
            <div class="card" >
            <div class="card-body ">
              <h5 class="card-title">Brand Name : ${data1[i].nome}</h5>
              <h5 class="card-title">code : ${data1[i].codigo} </h5>
              </div>
            
          </div>
            `

            document.body.append(div)
        }
    })
};
vehicles();

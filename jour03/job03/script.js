$("#button").click(function () {
    var parent = $("#shuffle");
    const divs = parent.children();
    // console.log(divs);
    // console.log(divs.length)
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        //  console.log(divs);
    }
      
    // for(let i=0; i<divs.length;i++){
    //     console.log[divs[i]]
    // }
    // console.log(parent.children()[1]);
    // console.log(parent.children()[2]);
    // console.log(parent.children()[3].id);
    // console.log(parent.children()[4]);
    // console.log(parent.children()[5]);
    // console.log(parent.children()[6]);
    // console.log(parent.children()[7]);
    // console.log(parent.children()[8]);
    var parent = $("div");

for(let i =0;i < 9;i++){
    // console.log(parent.children()[1])
    if( parent.children()[i].id==9){
        // console.log(i)
        // console.log(parent[0]);
        console.log(parent.children()[0])
// PAS REUSSI A FAIRE PRENDRE LA PALCE DE LA DIV EMPTY APPEND REALISEE MAIS FAUT IL FAIRE FONCTION COMME PARAMTRE LA POSITION DU BLANC DE IMAGE VIDE
        if(i==0){
            
            $('#'+parent.children()[1].id).click(function(event){
                let temp = parent.children()[0];
                parent[0].append(parent.children()[1])
                parent[1].append(temp);
                console.log(i)
            })
            $('#'+parent.children()[3].id).click(function(event){
                let temp = parent.children()[0];
                parent[0].append(parent.children()[3])
                parent[3].append(temp);
                
            })
        }



     }

    }
})
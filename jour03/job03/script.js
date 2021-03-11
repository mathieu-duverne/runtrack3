$("#button").click(function () {
    var parent = $("#shuffle");
    const divs = parent.children();
    // console.log(divs);
    // console.log(divs.length)
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        //  console.log(divs);
    }
       for(let i =0;i < 9;i++){
        //    console.log(divs);
        if( parent.children()[i].id==9){
            if(i==0){
                console.log("pipi")
                console.log(parent.children()[1].id)
                $('#'+parent.children()[1].id).click(function(event){
                    let temp = parent.children()[0];
                    console.log(parent.children()[1]);
                    $("#shuffle").append(parent.children()[1])
                })
                parent.children()[3].click(function(){
                    console.log(' pipi')
                })
            }



         }
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

})
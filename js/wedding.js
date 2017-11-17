$(document).ready(function(){

        var left = 0;
        var items = $(".img_item");

        animateImg(items,0,0,0);
    });


    var indexNum = 1;
    var animateImg = function(items,left,height,indexNum){

        if(items.length >= indexNum){
            var item = items.get(indexNum);
            $(item).animate({
                left: left,
                top : height,
                opacity: 1
            }, 1500 ,function() {
                left += 250;

                indexNum++;

                if(indexNum  % 4 == 0){
                    left = 0;
                    height += 250;
                }
                
                console.log(items);
                animateImg(items,left,height,indexNum);
            });

            
        }
        

    };

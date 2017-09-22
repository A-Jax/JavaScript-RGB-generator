
function randomColour(count) {
  
    var j = 0;
    while (j < count)
        {
              var html = "";
              var rgbColor;
              var total = [];

              for (var i = 0; i < 3; i++) {

                    total += ( Math.floor(Math.random() * 256) );

                      if(i < 2) {
                         total += ", ";
                         }
                }

               rgbColor =  ("rgb(" + total + ")" );
                //console.log(rgbColor);

               html += '<div style="background-color:' + rgbColor + '"></div>';

               document.write(html);

               j++;
            }

  }

randomColour(10); // call function, input amount of times to print a random colour.
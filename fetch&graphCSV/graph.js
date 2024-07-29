
async function chartIt(){
    const data = await getData();
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.xLabels,
            datasets: [{
              label: 'Combined Lard-Surface air and Sea-Surface water Temperature in °C',//opt+shift+8 for °
              data: data.yTemps,
              backgroundColor:['rgba(255,99,132,0.2)'
              ],
              borderColor: ['rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(92, 255, 132, 0.4)',
            },{
                label: 'Combined Lard-Surface air and Sea-Surface water Temperature in Nothern Hemisphere °C',//opt+shift+8 for °
              data: data.yNorth,
              backgroundColor:['rgba(99,255,132,0.2)'
              ],
              borderColor: ['rgba(99, 255, 132, 1)'
              ],
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(92, 255, 132, 0.4)',

            },{
                label: 'Combined Lard-Surface air and Sea-Surface water Temperature in Southern Hemisphere °C',//opt+shift+8 for °
              data: data.ySouth,
              backgroundColor:['rgba(0,99,255,0.2)'
              ],
              borderColor: ['rgba(0, 99, 255, 1)'
              ],
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(92, 255, 132, 0.4)',
            }]
          },
          options: {
            scales: {
                y: {
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, ticks) {
                            return value + "°" ;
                        }
                    }
                }
            }
        }
        });
       
}

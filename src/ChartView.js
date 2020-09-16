import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';


ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

function ChartView(props){

        
        let date =  props.count[40]; 
        console.log(props)
        const chartConfigs = {
        type: 'column3d',
        width: 1180,
        height: 450,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Active corona cases till"+" "+date,
                "subCaption": "Tamilnadu region",
                "xAxisName": "City",
                "yAxisName": "No of Cases",
                "theme": "candy"
              },
              "data": [
                {
                  "label": props.city[0],
                  "value": props.count[0]
                },
                {
                    "label": props.city[1],
                    "value": props.count[1]
                },
                {
                    "label": props.city[2],
                    "value": props.count[2]
                },
                {
                    "label": props.city[3],
                    "value": props.count[3]
                  },
                {
                    "label": props.city[4],
                    "value": props.count[4]
                },
                {
                    "label": props.city[5],
                    "value": props.count[5]
                },
                {
                    "label": props.city[6],
                    "value": props.count[6]
                },
                {
                    "label": props.city[7],
                    "value": props.count[7]
                  },
                {
                    "label": props.city[8],
                    "value": props.count[8]
                  },
                {
                    "label": props.city[9],
                    "value": props.count[9]
                }, 
                {
                    "label": props.city[10],
                    "value": props.count[10]
                  },
                  {
                      "label": props.city[11],
                      "value": props.count[11]
                  },
                  {
                      "label": props.city[12],
                      "value": props.count[12]
                  },
                  {
                      "label": props.city[13],
                      "value": props.count[13]
                    },
                  {
                      "label": props.city[14],
                      "value": props.count[14]
                  },
                  {
                      "label": props.city[15],
                      "value": props.count[15]
                  },
                  {
                      "label": props.city[16],
                      "value": props.count[16]
                  },
                  {
                      "label": props.city[17],
                      "value": props.count[17]
                    },
                  {
                      "label": props.city[18],
                      "value": props.count[18]
                    },
                  {
                      "label": props.city[19],
                      "value": props.count[19]
                  },
                  {
                    "label": props.city[20],
                    "value": props.count[20]
                  },
                  {
                      "label": props.city[21],
                      "value": props.count[21]
                  },
                  {
                      "label": props.city[22],
                      "value": props.count[22]
                  },
                  {
                      "label": props.city[23],
                      "value": props.count[23]
                    },
                  {
                      "label": props.city[24],
                      "value": props.count[24]
                  },
                  {
                      "label": props.city[25],
                      "value": props.count[25]
                  },
                  {
                      "label": props.city[26],
                      "value": props.count[26]
                  },
                  {
                      "label": props.city[27],
                      "value": props.count[27]
                    },
                  {
                      "label": props.city[28],
                      "value": props.count[28]
                    },
                  {
                      "label": props.city[29],
                      "value": props.count[29]
                  },
                  {
                    "label": props.city[30],
                    "value": props.count[30]
                  },
                  {
                      "label": props.city[31],
                      "value": props.count[31]
                  },
                  {
                      "label": props.city[32],
                      "value": props.count[32]
                  },
                  {
                      "label": props.city[33],
                      "value": props.count[33]
                    },
                  {
                      "label": props.city[34],
                      "value": props.count[34]
                  },
                  {
                      "label": props.city[35],
                      "value": props.count[35]
                  },
                  {
                      "label": props.city[36],
                      "value": props.count[36]
                  },
                 
                
              ]
            
        }
        };
        
        return(

    <div>      
        <ReactFC {...chartConfigs} />
    
    </div>
        )
 

    }

export default ChartView    



    
      
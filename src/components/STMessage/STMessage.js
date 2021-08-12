import React from "react";
import { Box, Button } from "@material-ui/core";
import Context from "../../contexts/Context";

import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class STMessage extends React.Component {
    static contextType = Context;

    render() {
        let localization = this.context.environment.localization;
        let stMessage = localization.stMessage;

        if (stMessage.chart != undefined) {
            const options = {
                title: { text: stMessage.chart.title },
                data: [{
                    type: "column",
                    dataPoints: stMessage.chart.dataPoints
                }]
            };

            return (
                <Box>
                    <Box>
                        <CanvasJSChart options = {options}  onRef = {ref => this.chart = ref} />
                    </Box>
    
                    <center style={{margin: "16px"}}>
                        <Button variant="contained" color="primary" size="large" onClick={this.props.onClickNext}>
                            {stMessage.next}
                        </Button>
                    </center>
                </Box>
            );
        } else {
            return(
                <Box>
                    <center style={{margin: "16px"}}>
                        <Button variant="contained" color="primary" size="large" onClick={this.props.onClickNext}>
                            {stMessage.next}
                        </Button>
                    </center>
                </Box>
            );
        }

        
    }
}
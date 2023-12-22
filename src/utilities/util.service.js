import React from 'react'
import moment from 'moment'

function convertDateToOurFormat(date) {
    if(!date){
        return null;
    }
    else{
        return moment(date).format("MMMM D YYYY, [at] h:mm a");
    }
}

export const UtilService = {
    convertDateToOurFormat
}
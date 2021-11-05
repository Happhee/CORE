import React, { useState } from 'react';
import ProblemGrid from '../../components/ProblemGrid';
function ProblemServer(props) {
    console.log('서버랑 문제')
    return (
        <>

            <ProblemGrid title_text_item="Problem" temporary_save_button="임시저장"
                mainunit={props.mainunit} subunit={props.subunit}
                type={props.type}
                grid_data={props.grid_data} input_data={props.input_data} output_data={props.output_data} />
        </>
    )
}

export default ProblemServer;
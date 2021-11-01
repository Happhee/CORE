import React, { useState } from 'react'
import VisuallyHidden from "@reach/visually-hidden";

import {
    Listbox,
    ListboxInput,
    ListboxButton,
    ListboxPopover,
    ListboxList,
    ListboxOption,
} from "@reach/listbox";
import "@reach/listbox/styles.css";


function CoreListbox(props) {
    //강의실 리스트
    let [listbox_datas, setListbox_datas] = useState(props.listbox_datas);

    let [selectedData, setSelectedData] = useState(listbox_datas[0].value);
    console.log()
    return (
        <div>
            <span id="class">강의실 선택</span>
            <ListboxInput
                aria-labelledby="class" defaultValue={selectedData}
                onChange={(value) => setSelectedData(value)}
                onClick={() => { console.log('clcik!!') }}
            >
                <ListboxButton arrow="▼" />
                <ListboxPopover>

                    <ListboxList>
                        {listbox_datas.map((listbox_data) => (
                            <ListboxOption
                                key={listbox_data.id}
                                value={listbox_data.value}
                            >
                                {listbox_data.value}
                            </ListboxOption>
                        ))}
                    </ListboxList>
                </ListboxPopover>
            </ListboxInput>
        </div >

    )
}

export default CoreListbox;
import React from "react";
import Popover from "react-bootstrap/Popover";

export default class InputPopover {

    static getPopover(title: string, content: any) {
        return (
            <Popover id="popover-basic">
                <Popover.Title as="h3"  style={{color:'#000'}}>{title}</Popover.Title>
                <Popover.Content>{content}</Popover.Content>
            </Popover>
        );
    }
    
}
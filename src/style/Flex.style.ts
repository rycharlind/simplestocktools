import CSS from 'csstype';

export default class FlexStyle {

    static base: CSS.Properties  = {
        display: 'flex',
        alignItems: 'center',
    }
    
    static row: CSS.Properties = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    }

    static col: CSS.Properties = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }

    static spacer: CSS.Properties = {
        flexGrow: 1
    }

}

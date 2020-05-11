import CSS from 'csstype';

export default class Brand {
    
    static primary = '#e91e63';
    static secondary = '#20232a';

    static brandName: CSS.Properties = {
        color: Brand.primary,
        fontWeight: 'bold',
        fontSize: '24px'
    }

    static image: CSS.Properties = {
        color: Brand.primary,
        width: '36px',
        height: '36px',
    }

    static imageLarge: CSS.Properties = {
        color: Brand.primary,
        width: '75px',
        height: '75px',
    }

    static text: CSS.Properties = {
        color: Brand.primary,
        fontSize: '28px',
        fontWeight: 'bold'
    }

    static textCenter: CSS.Properties = {
        color: Brand.primary,
        fontSize: '56px',
        fontWeight: 'bold',
        textAlign: 'center'
    }
}
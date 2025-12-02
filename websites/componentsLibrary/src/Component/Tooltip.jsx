const styles = {
    dark: {        
        success: {
            backgroundColor: 'rgba(27, 155, 55, 1)',
            border: '1px solid rgba(68, 128, 80, 1)',
            color: '#f2f2f2ff'
        },
        primary: {
            backgroundColor: 'rgb(38, 38, 38)',
            border: '1px solid rgba(70, 70, 70, 1)',
            color: '#f2f2f2ff'
        },
        secondary: {
            backgroundColor: 'rgb(168, 34, 155)',
            border: '1px solid rgb(120, 24, 110)',
            color: '#f2f2f2ff'
        },
        info: {
            backgroundColor: 'rgb(30, 64, 176)',
            border: '1px solid rgba(50, 67, 124, 1)',
            color: '#f2f2f2ff'
        }
    },
    light:{
        success: {
            backgroundColor: 'rgb(229, 255, 243)',
            border: '1px solid rgba(85, 150, 97, 1)',
            color: 'rgba(8, 117, 31, 1)'
        },
        primary: {
            backgroundColor: 'rgba(243, 242, 239, 1)',
            border: '1px solid rgba(136, 136, 136, 1)',
            color: 'rgb(38, 38, 38)'
        },
        secondary: {
            backgroundColor: 'rgb(255, 245, 252)',
            border: '1px solid rgba(214, 109, 183, 1)',
            color: 'rgba(196, 35, 150, 1)'
        },
        info: {
            backgroundColor: 'rgb(224, 231, 255)',
            border: '1px solid rgba(104, 126, 196, 1)',
            color: 'rgba(30, 64, 175)'
        }
    }
};

export default function Tooltip({children, color='primary', theme, title='Tooltip'}) {
    const defaultTheme = theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const stylesUsed = {
        backgroundColor: styles[defaultTheme][color]?.backgroundColor || styles[defaultTheme]['primary'].backgroundColor,
        color: styles[defaultTheme][color]?.color || styles[defaultTheme]['primary'].color,
        border: styles[defaultTheme][color]?.border || styles[defaultTheme]['primary'].border
    };
    
    return (              
        <span className={`tooltip-target`}>
            {children}
            <span className={`tooltip-text tooltip-${defaultTheme}`} style={stylesUsed}>             
                <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M155.8 96C123.9 96 96.9 119.4 92.4 150.9L64.6 345.2C64.2 348.2 64 351.2 64 354.3L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 354.3C576 351.3 575.8 348.2 575.4 345.2L547.6 150.9C543.1 119.4 516.1 96 484.2 96L155.8 96zM155.8 160L484.3 160L511.7 352L451.8 352C439.7 352 428.6 358.8 423.2 369.7L408.9 398.3C403.5 409.1 392.4 416 380.3 416L259.9 416C247.8 416 236.7 409.2 231.3 398.3L217 369.7C211.6 358.9 200.5 352 188.4 352L128.3 352L155.8 160z"/></svg>
                <div>
                    <strong>{title}</strong>
                    <br />
                    This is a {color} tooltip with a {defaultTheme} theme.
                </div>                
            </span>
        </span>
    
  )
}
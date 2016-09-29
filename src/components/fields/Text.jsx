import React from 'react';

/**
 * Create a new text component
 */
class Text extends React.Component
{
    /**
     * Render jsx
     *
     * @return {XML}
     */
    render() {
        const { icon, onChange } = this.props;

        return (
            <div className="from-group">
                <div className="input-group">
                    <span className="input-group-addon"><span className={ "glyphicon glyphicon-" + icon }></span></span>

                    <input className="form-control" placeholder={this.props.placeholder} onChange={onChange} />
                </div>
            </div>
        )
    }
}


export default Text;
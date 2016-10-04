import _                from 'lodash';
import React            from 'react';
import { DragSource }   from 'react-dnd';
import { DropTarget }   from 'react-dnd';
import { TextSource,
        TextTarget,
        SourceConnect,
        TargetConnect } from './../../services/react-dnd/text';

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
        const { icon, onChange, placeholder, value } = this.props;

        const {connectDragSource, connectDropTarget } = this.props;

        return connectDragSource(connectDropTarget(
            <div className="from-group">
                <div className="input-group">
                    <span className="input-group-addon">
                        <span className={ "glyphicon glyphicon-" + icon }></span>
                    </span>

                    <input className="form-control" placeholder={placeholder} value={value} onChange={onChange} />
                </div>
            </div>
        ))
    }
}


export default _.flow(
    DragSource('TEXT', TextSource, SourceConnect),
    DropTarget('TEXT', TextTarget, TargetConnect)
)(Text);
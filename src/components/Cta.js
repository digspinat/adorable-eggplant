import React from 'react';
import _ from 'lodash';

import {markdownify, Link, safePrefix, classNames} from '../utils';

export default class Cta extends React.Component {
    render() {
        return (
            <section id="cta" className={'wrapper ' + this.props.pageContext.frontmatter.cta.background_style + ' special'}>
                <div className="inner">
                    <header className="major">
                        <h2>{this.props.pageContext.frontmatter.cta.title}</h2>
                        {markdownify(_.get(this.props, 'pageContext.frontmatter.cta.text'))}
                    </header>
                    {this.props.pageContext.frontmatter.cta.actions && 
                        <ul className="actions special">
                            {_.map(this.props.pageContext.frontmatter.cta.actions, (action, action_idx) => (
                                <li key={action_idx}><Link to={(action.url.startsWith('#') ? action.url : safePrefix(action.url))} className={classNames('button', {'primary': action.is_primary}, {'scrolly': action.is_scrolly})}>{action.label}</Link></li>
                            ))}
                        </ul>
                    }
                </div>
            </section>
        );
    }
}

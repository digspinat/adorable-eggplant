import React from 'react';
import _ from 'lodash';

import {getPages, Link, safePrefix, markdownify} from '../utils';

export default class Highlights extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="highlights">
                {_.map(_.orderBy(_.filter(getPages(this.props.pageContext.pages, '/'), ['frontmatter.home.highlights.enabled', true]), 'frontmatter.home.highlights.weight'), (section_page, section_page_idx) => (
                    ((section_page.frontmatter.home.highlights.weight > 0) || (section_page.frontmatter.home.highlights.weight < 1)) && 
                        <section key={section_page_idx}>
                            {section_page.frontmatter.home.highlights.home_img && 
                                <Link className="image" to={safePrefix(_.get(section_page, 'url'))}>
                                    <img src={safePrefix(section_page.frontmatter.home.highlights.home_img.path)} data-position={section_page.frontmatter.home.highlights.home_img.data_position} alt="" />
                                </Link>
                            }
                            <div className="content">
                                <header className="major">
                                    <h2>{_.get(section_page, 'frontmatter.title')}</h2>
                                    {markdownify(section_page.frontmatter.subtitle)}
                                </header>
                                {markdownify(section_page.frontmatter.home.highlights.excerpt)}
                                <ul className="actions">
                                    <li><Link to={safePrefix(_.get(section_page, 'url'))} className="button">Learn More</Link></li>
                                </ul>
                            </div>
                        </section>
                ))}
            </section>
        );
    }
}

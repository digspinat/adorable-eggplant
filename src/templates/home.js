import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';
import Banner from '../components/Banner';
import Cta from '../components/Cta';

export default class Home extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <Banner {...this.props} />
                <section id="main" className="wrapper">
                    <div className="inner">
                        {_.map(this.props.pageContext.frontmatter.sections, (section, section_idx) => {
                            let SectionComponent = components[section.component];
                            return (
                                <SectionComponent key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} page={this.props.pageContext} />
                            )
                        })}
                    </div>
                </section>
                {this.props.pageContext.frontmatter.cta.enabled && 
                    <Cta {...this.props} />
                }
            </Layout>
        );
    }
}

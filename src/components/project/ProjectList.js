import React, { Component } from 'react'
import autobind from 'autobind-decorator'

import ProjectListItem from './ProjectListItem'

class ProjectList extends Component {
    state = { selectedId: undefined }

    @autobind
    handleSelectItem (id) {
        this.setState({ selectedId: id})
    }

    render () {
        const { projects } = this.props
        return (
            <div>
                {
                    projects.map((project) =>
                        <ProjectListItem
                            key={project.id} 
                            project={project} 
                            selected={project.id === this.state.selectedId} 
                            onSelect={this.handleSelectItem} />
                    )
                }
            </div>
        )
    }
}

export default ProjectList
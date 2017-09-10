import React, { Component } from 'react'
import autobind from 'autobind-decorator'

import ProjectListItem from './ProjectListItem'

class ProjectList extends Component {
    render () {
        const { projects, onEdit, onDelete } = this.props
        return (
            <div>
            {
                projects.map((project) =>
                    <ProjectListItem 
                        key={project.id}
                        project={project}
                        onEdit={() => onEdit(project)}
                        onDelete={() => onDelete(project)} />
                )
            }
            </div>
        )
    }
}

export default ProjectList
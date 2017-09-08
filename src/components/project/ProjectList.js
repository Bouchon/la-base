import React, { Component } from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import FadeAndSlideTransition from '../transitions/FadeAndSlideTransition'

import ProjectListItem from './ProjectListItem'

class ProjectList extends Component {
    render () {
        const { projects, onEdit, onDelete } = this.props
        return (
            <TransitionGroup>
            {
                projects.map((project) => 
                    <ProjectListItem 
                        project={project}
                        onEdit={() => onEdit(project)}
                        onDelete={() => onDelete(project)} />
                )
            }
            </TransitionGroup>
        )
    }
}

export default ProjectList
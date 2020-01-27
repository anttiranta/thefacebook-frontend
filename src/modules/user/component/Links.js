// Imports
import React from 'react'

// App Imports
import pagesRoutes from '../../../setup/routes/pages'
import { apostrophize } from '../../../utils/stringUtils'

const Links = (props) => {
    return (
        <div id="preferences_box">
            <table>
                <tbody>
                    <tr>
                        <td><a href={pagesRoutes.construction.path}>{apostrophize(props.user.name) + ' Pictures'}</a></td>
                    </tr>
                    <tr>
                        <td><a href={pagesRoutes.construction.path}>{apostrophize(props.user.name) + ' Groups'}</a></td>
                    </tr>
                    <tr>
                        <td><a href={pagesRoutes.construction.path}>{apostrophize(props.user.name) + ' Friends'}</a></td>
                    </tr>
                    <tr>
                        <td><a href={pagesRoutes.construction.path}>{apostrophize(props.user.name) + ' Messages'}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Links;
// Imports
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// App Imports
import Item from '../../../media_gallery/component/Item'
import Loading from '../../../common/component/Loading'
import { getMediaGalleryEntryListByUser as getListByUser } from '../../../media_gallery/redux/actions'

const Grid = (props) => {

    const prevProps = useRef(false)

    useEffect(() => {
        if (!prevProps.current || prevProps.current.user.id !== props.user.id) {
            if (props.user.id && !props.mediaGallery.isLoading) {
                props.getListByUser(props.user.id)
            }
        }
        prevProps.current = props
    }, [props])

    const renderTableRow = (columns, i) => {
        // TODO: we need to know whether this is default photo or not = from props.user.profilePicture
        const keyValueTr = 'tr' + i

        return <tr key={keyValueTr}>
            {columns.map((mediaGalleryEntry, j) => (
                <Item key={j} mediaGalleryEntry={mediaGalleryEntry}  />
            ))}
        </tr>
    }

    const renderTable = (list) => {
        let tableRows = [];
        let columns = []
        let i = 0

        list.forEach(mediaGalleryEntry => {
            if (i > 0 && i % 4 === 0) {
                tableRows.push(renderTableRow(columns, i))
                
                columns = []
                columns.push(mediaGalleryEntry)

                if (i === (list.length - 1)){
                    tableRows.push(renderTableRow(columns, i + 1))
                } 
            } else if (i === list.length - 1) {
                columns.push(mediaGalleryEntry)
                tableRows.push(renderTableRow(columns, i))
            } else {
                columns.push(mediaGalleryEntry)
            }
            
            i = i + 1
        });

        return tableRows
    }

    let { isLoading, list } = props.mediaGallery
    if (!prevProps.current) {
        isLoading = true
    }

    return (
        <div style={{ marginLeft: "50px" }}>
            {
                isLoading
                    ? <Loading />
                    : list.length > 0
                        ? <table>
                            <tbody>{renderTable(list)}</tbody>
                        </table>
                        : <p>User has not uploaded any media.</p>
            }
        </div>
    )
}

// Component Properties
Grid.propTypes = {
    user: PropTypes.object.isRequired,
    getListByUser: PropTypes.func.isRequired
}

// Component State
function gridState(state) {
    return {
        mediaGallery: state.mediaGalleryEntries
    }
}

export default connect(gridState, { getListByUser })(Grid)
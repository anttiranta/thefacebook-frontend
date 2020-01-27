// Imports
import React from 'react'

const Search = () => {
    return (
        <div id="login_page_box">
            <div style={{ backgroundColor: '#4C70A0', color: 'white' }}>Search </div>
            <h1 style={{ textAlign: 'center' }}>[ Search Users ] </h1>

            <form>
                <table>
                    <tbody>
                        <tr>
                            <td style={{ width: '60px' }}>Name: </td>
                            <td><input type="text" name="name" /></td>
                        </tr>
                    </tbody>
                </table>
                <table id="login_page_links">
                    <tbody>
                        <tr>
                            <td style={{ textAlign: 'center', paddingRight: '5px' }}>
                                <div id="fb_button">
                                    <input type="submit" name="serch" value="Search" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Search;